'use client'

import { useState } from 'react'
import { 
  Settings, 
  Percent, 
  Info, 
  Save, 
  ShieldCheck, 
  AlertCircle,
  Database,
  Globe,
  Lock,
  Zap,
  CheckCircle2
} from 'lucide-react'
import { COURSE_PRICE, formatCurrency } from '@/lib/affiliate-data'

export default function AdminCommissionConfig() {
  const [globalRate, setGlobalRate] = useState(20)
  const [minPayout, setMinPayout] = useState(100)
  const [cookieDays, setCookieDays] = useState(30)
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }, 1500)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Settings className="w-6 h-6 text-green-400" />
          Configuración del Sistema
        </h1>
        <p className="text-[#71717a] mt-1">Reglas globales para comisiones, cookies y pagos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Comisiones */}
        <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a] space-y-6">
          <div className="flex items-center gap-3">
             <div className="p-2 rounded-xl bg-green-500/10 text-green-400">
               <Percent className="w-5 h-5" />
             </div>
             <h2 className="text-base font-semibold text-white">Reglas de Comisión</h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#71717a] uppercase tracking-wider">Tasa Global Estándar (%)</label>
              <div className="flex items-center gap-4">
                 <input 
                   type="range" 
                   min="5" 
                   max="50" 
                   value={globalRate} 
                   onChange={(e) => setGlobalRate(parseInt(e.target.value))}
                   className="flex-1 h-2 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer accent-green-600"
                 />
                 <span className="w-12 text-right font-bold text-green-400">{globalRate}%</span>
              </div>
              <p className="text-[10px] text-[#71717a]">Afecta a todos los nuevos afiliados. Los existentes mantienen su tasa manual.</p>
            </div>

            <div className="p-3 rounded-xl bg-green-500/5 border border-green-500/10">
               <p className="text-xs text-[#71717a]">
                 Con el precio actual de {formatCurrency(COURSE_PRICE)}, la comisión global sería de <span className="text-white font-bold">{formatCurrency(COURSE_PRICE * globalRate / 100)}</span>.
               </p>
            </div>
          </div>
        </div>

        {/* Parámetros de Tracking */}
        <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a] space-y-6">
          <div className="flex items-center gap-3">
             <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
               <Globe className="w-5 h-5" />
             </div>
             <h2 className="text-base font-semibold text-white">Tracking & Cookies</h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#71717a] uppercase tracking-wider">Duración de Cookie (Días)</label>
              <select 
                value={cookieDays}
                onChange={(e) => setCookieDays(parseInt(e.target.value))}
                className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#27272a] rounded-xl text-sm text-white focus:outline-none focus:border-green-500/50 appearance-none"
              >
                <option value={7}>7 Días</option>
                <option value={15}>15 Días (Standard)</option>
                <option value={30}>30 Días (Recomendado)</option>
                <option value={60}>60 Días</option>
                <option value={90}>90 Días (Premium)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#71717a] uppercase tracking-wider">Monto Mínimo de Pago (USD)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717a] font-bold text-sm">$</span>
                <input 
                  type="number" 
                  value={minPayout}
                  onChange={(e) => setMinPayout(parseInt(e.target.value))}
                  className="w-full pl-8 pr-4 py-2.5 bg-[#1a1a1a] border border-[#27272a] rounded-xl text-sm text-white focus:outline-none focus:border-green-500/50"
                  placeholder="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integración Frappe LMS */}
      <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a]">
        <div className="flex items-center justify-between mb-6">
           <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-base font-semibold text-white">Integración Frappe LMS</h2>
           </div>
           <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-bold uppercase tracking-tight">Conectado</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="space-y-2">
              <label className="text-xs font-semibold text-[#71717a] uppercase tracking-wider">Webhook URL (Sales)</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  readOnly
                  value="https://cl.aiengineerbuilder.protolylat.com/api/webhooks/frappe"
                  className="flex-1 px-4 py-2.5 bg-[#1a1a1a] border border-[#27272a] rounded-xl text-xs text-[#71717a] opacity-60 font-mono"
                />
                <button className="px-3 py-2 bg-[#1a1a1a] border border-[#27272a] rounded-xl text-[#71717a] hover:text-white transition-colors">
                  <Lock className="w-4 h-4" />
                </button>
              </div>
           </div>
           <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#1a1a1a]/50 border border-[#27272a]">
                 <div>
                    <p className="text-xs font-semibold text-white">Sincronización Automática</p>
                    <p className="text-[10px] text-[#71717a]">Importar ventas cada 15 min</p>
                 </div>
                 <div className="w-10 h-5 bg-green-600 rounded-full relative">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" />
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Acciones de Guardado */}
      <div className="flex items-center justify-end gap-4 py-6 border-t border-[#27272a]">
         <div className="flex-1 flex gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-xs text-[#71717a]">Los cambios en la tasa de comisión no son retroactivos para ventas ya registradas.</p>
         </div>
         <button 
           onClick={handleSave}
           disabled={isSaving}
           className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 ${
             saved 
               ? 'bg-green-600 text-white' 
               : 'bg-white hover:bg-[#fafafa] text-black shadow-xl shadow-white/5'
           }`}
         >
           {isSaving ? (
             <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
           ) : saved ? (
             <CheckCircle2 className="w-5 h-5" />
           ) : (
             <Save className="w-5 h-5" />
           )}
           {saved ? 'Cambios Guardados' : 'Guardar Configuración'}
         </button>
      </div>
    </div>
  )
}
