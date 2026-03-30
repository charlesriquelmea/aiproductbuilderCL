'use client'

import { useState } from 'react'
import { 
  X, 
  User, 
  Mail, 
  Hash, 
  Percent, 
  ShieldCheck, 
  Send,
  AlertCircle 
} from 'lucide-react'

interface CreateAffiliateModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CreateAffiliateModal({ isOpen, onClose }: CreateAffiliateModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    code: '',
    commissionRate: 20
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simular creación
    setTimeout(() => {
      setIsSubmitting(false)
      onClose()
      alert('Afiliado creado exitosamente. Se ha enviado un email de bienvenida.')
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-[#0a0a0a] border border-[#27272a] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-6 border-b border-[#27272a] flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <User className="w-5 h-5 text-green-400" />
            Nuevo Afiliado
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-[#71717a] hover:text-white hover:bg-[#1a1a1a] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-[#71717a] uppercase tracking-wider flex items-center gap-2">
              <User className="w-3 h-3" />
              Nombre Completo
            </label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 bg-[#111111] border border-[#27272a] rounded-xl text-sm text-white focus:outline-none focus:border-green-500/50 transition-colors"
              placeholder="Ej: Roberto Silva"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-[#71717a] uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-3 h-3" />
              Correo Electrónico
            </label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 bg-[#111111] border border-[#27272a] rounded-xl text-sm text-white focus:outline-none focus:border-green-500/50 transition-colors"
              placeholder="roberto@ejemplo.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#71717a] uppercase tracking-wider flex items-center gap-2">
                <Hash className="w-3 h-3" />
                Referral Code
              </label>
              <input 
                type="text" 
                required
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                className="w-full px-4 py-2.5 bg-[#111111] border border-[#27272a] rounded-xl text-sm text-white focus:outline-none focus:border-green-500/50 font-mono"
                placeholder="ROBERTO20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#71717a] uppercase tracking-wider flex items-center gap-2">
                <Percent className="w-3 h-3" />
                Comisión %
              </label>
              <input 
                type="number" 
                required
                min="0"
                max="100"
                value={formData.commissionRate}
                onChange={(e) => setFormData({ ...formData, commissionRate: parseInt(e.target.value) })}
                className="w-full px-4 py-2.5 bg-[#111111] border border-[#27272a] rounded-xl text-sm text-white focus:outline-none focus:border-green-500/50"
              />
            </div>
          </div>

          <div className="p-3 rounded-xl bg-green-500/5 border border-green-500/10 flex gap-3">
            <AlertCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-[10px] text-[#71717a] leading-relaxed">
              Al guardar, se generará una contraseña temporal y se enviará un enlace de acceso al correo proporcionado.
            </p>
          </div>

          <div className="pt-4 flex gap-3">
             <button 
               type="button"
               onClick={onClose}
               className="flex-1 py-3 rounded-xl border border-[#27272a] text-sm font-bold text-[#71717a] hover:text-white hover:bg-[#1a1a1a] transition-all"
             >
               Cancelar
             </button>
             <button 
               type="submit"
               disabled={isSubmitting}
               className="flex-1 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white text-sm font-bold shadow-lg shadow-green-600/20 transition-all flex items-center justify-center gap-2"
             >
               {isSubmitting ? (
                 <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
               ) : (
                 <Send className="w-4 h-4" />
               )}
               {isSubmitting ? 'Guardando...' : 'Crear Acceso'}
             </button>
          </div>
        </form>
      </div>
    </div>
  )
}
