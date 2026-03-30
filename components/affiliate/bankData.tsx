'use client'

import { useState } from 'react'
import { 
  Building2, 
  CreditCard, 
  User, 
  ShieldCheck, 
  Save, 
  AlertCircle,
  Hash,
  CheckCircle,
} from 'lucide-react'
import { currentAffiliate, BANKS } from '@/lib/affiliate-data'

export default function AffiliateBankData() {
  const [formData, setFormData] = useState({
    rut: currentAffiliate.bankData?.rut || '',
    bank: currentAffiliate.bankData?.bank || '',
    accountType: currentAffiliate.bankData?.accountType || 'corriente',
    accountNumber: currentAffiliate.bankData?.accountNumber || '',
    holderName: currentAffiliate.bankData?.holderName || currentAffiliate.name,
  })

  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    // Simular guardado
    setTimeout(() => {
      setIsSaving(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }, 1200)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-violet-400" />
          Datos Bancarios
        </h1>
        <p className="text-[#71717a] mt-1">Configura donde quieres recibir tus comisiones.</p>
      </div>

      <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 flex gap-3">
        <ShieldCheck className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-[#71717a] leading-relaxed">
          Tus datos bancarios están protegidos y solo se utilizan para procesar tus pagos mensuales. Asegúrate de que los datos coincidan exactamente con tu cuenta para evitar rechazos.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Titular */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#71717a] uppercase tracking-wider flex items-center gap-2">
              <User className="w-3 h-3" />
              Nombre del Titular
            </label>
            <input
              type="text"
              value={formData.holderName}
              onChange={(e) => setFormData({ ...formData, holderName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#27272a] text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
              placeholder="Ej: Juan Pérez"
              required
            />
          </div>

          {/* RUT */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#71717a] uppercase tracking-wider flex items-center gap-2">
              <Hash className="w-3 h-3" />
              RUT / ID Tax
            </label>
            <input
              type="text"
              value={formData.rut}
              onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#27272a] text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
              placeholder="Ej: 12.345.678-9"
              required
            />
          </div>

          {/* Banco */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#71717a] uppercase tracking-wider flex items-center gap-2">
              <Building2 className="w-3 h-3" />
              Banco
            </label>
            <select
              value={formData.bank}
              onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#27272a] text-sm text-white focus:outline-none focus:border-violet-500 transition-colors appearance-none"
              required
            >
              <option value="" disabled>Selecciona un banco</option>
              {BANKS.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Tipo de Cuenta */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#71717a] uppercase tracking-wider flex items-center gap-2">
              <CreditCard className="w-3 h-3" />
              Tipo de Cuenta
            </label>
            <select
              value={formData.accountType}
              onChange={(e) => setFormData({ ...formData, accountType: e.target.value as any })}
              className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#27272a] text-sm text-white focus:outline-none focus:border-violet-500 transition-colors appearance-none"
              required
            >
              <option value="corriente">Cuenta Corriente</option>
              <option value="vista">Cuenta Vista / RUT</option>
              <option value="ahorro">Cuenta de Ahorro</option>
            </select>
          </div>

          {/* Número de Cuenta */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-semibold text-[#71717a] uppercase tracking-wider flex items-center gap-2">
              <Building2 className="w-3 h-3" />
              Número de Cuenta
            </label>
            <input
              type="text"
              value={formData.accountNumber}
              onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#27272a] text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
              placeholder="Ej: 0012345678"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSaving}
          className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transition-colors duration-300 ${
            saved 
              ? 'bg-green-500 text-white' 
              : 'bg-violet-600 hover:bg-violet-500 text-white shadow-xl shadow-violet-600/20'
          }`}
        >
          {isSaving ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Guardando...
            </div>
          ) : saved ? (
            <>
              <CheckCircle className="w-5 h-5" />
              ¡Datos Guardados!
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              Actualizar Datos Bancarios
            </>
          )}
        </button>
      </form>

      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#111111] border border-[#27272a]">
        <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-[#71717a] leading-relaxed">
          <span className="text-white font-semibold">¿Necesitas ayuda?</span> Si tienes dudas sobre cómo configurar tu cuenta o eres residente fuera de Chile, por favor contacta a soporte@protolylat.com para coordinar pagos vía PayPal o Wise.
        </p>
      </div>
    </div>
  )
}
