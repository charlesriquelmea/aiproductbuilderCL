'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User,
  Mail,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Lock,
  CheckCircle2,
  AlertCircle,
  PlayCircle,
  Zap
} from 'lucide-react'
import { FrappeCourse, frappeLMS } from '@/lib/frappe-lms'
import { useRouter } from 'next/navigation'

interface CheckoutFormProps {
  course: FrappeCourse
}

export function CheckoutForm({ course }: CheckoutFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
  })
  const [error, setError] = useState<string | null>(null)

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.email !== formData.confirmEmail) {
      setError('Los correos electrónicos no coinciden.')
      return
    }
    setError(null)
    setStep(2)
  }

  const handlePayment = async () => {
    setIsSubmitting(true)
    setError(null)
    try {
      const { checkout_url } = await frappeLMS.initiateCheckout({
        name: formData.name,
        email: formData.email,
        course_name: course.name,
      })
      // Simular redirección a MercadoPago
      router.push(checkout_url)
    } catch (err) {
      setError('Hubo un error al procesar el pago. Por favor intenta de nuevo.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-violet/10 border border-violet/20">
                <User className="w-5 h-5 text-violet" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Datos del Comprador</h2>
                <p className="text-xs text-[#71717a]">Con estos datos crearemos tu acceso al Bootcamp.</p>
              </div>
            </div>

            <form onSubmit={handleNext} className="space-y-5">
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
                  className="w-full px-4 py-3 bg-[#111111] border border-[#27272a] rounded-xl text-sm text-white focus:outline-none focus:border-violet/50 transition-colors"
                  placeholder="Tu nombre completo"
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
                  className="w-full px-4 py-3 bg-[#111111] border border-[#27272a] rounded-xl text-sm text-white focus:outline-none focus:border-violet/50 transition-colors"
                  placeholder="email@ejemplo.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#71717a] uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3" />
                  Confirmar Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  value={formData.confirmEmail}
                  onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
                  className="w-full px-4 py-3 bg-[#111111] border border-[#27272a] rounded-xl text-sm text-white focus:outline-none focus:border-violet/50 transition-colors"
                  placeholder="email@ejemplo.com"
                />
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-xs text-red-500">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-violet hover:bg-violet-600 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-violet/20"
              >
                Continuar al Pago
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-neon-green/10 border border-neon-green/20">
                <CreditCard className="w-5 h-5 text-neon-green" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Resumen de Pago</h2>
                <p className="text-xs text-[#71717a]">Finaliza tu inscripción con MercadoPago.</p>
              </div>
            </div>

            {/* Course Summary Card */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a] space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-[#27272a]">
                <div className="flex items-center gap-3">
                   <div className="size-10 rounded bg-violet/10 flex items-center justify-center">
                      <PlayCircle className="w-6 h-6 text-violet/40" />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-white leading-tight">{course.title}</p>
                      <p className="text-[10px] text-[#71717a] font-mono leading-none mt-1">Founding Member Cohort</p>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-sm font-bold text-white">${course.price.toLocaleString()} {course.currency}</p>
                </div>
              </div>

              <div className="space-y-2 py-2">
                 <div className="flex justify-between text-xs text-[#a1a1aa]">
                    <span>Subtotal</span>
                    <span>${course.price.toLocaleString()} {course.currency}</span>
                 </div>
                 <div className="flex justify-between text-xs text-neon-green font-bold">
                    <span>Descuento Aplicado</span>
                    <span>-$0.00</span>
                 </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t-2 border-dashed border-[#27272a]">
                 <p className="text-sm font-bold text-white">Total a Pagar</p>
                 <p className="text-2xl font-bold text-neon-green">${course.price.toLocaleString()} {course.currency}</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
               <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#27272a] flex items-center gap-3">
                  <Lock className="w-3.5 h-3.5 text-[#71717a]" />
                  <span className="text-[10px] text-[#71717a] font-bold uppercase tracking-widest">Pago Encriptado</span>
               </div>
               <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#27272a] flex items-center gap-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-neon-green" />
                  <span className="text-[10px] text-[#71717a] font-bold uppercase tracking-widest">Garantía Protegida</span>
               </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-neon-green hover:bg-[#16a34a] text-black font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-neon-green/20"
            >
              {isSubmitting ? (
                <div className="size-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-black" />
                  Pagar con MercadoPago
                </>
              )}
            </button>

            <button 
              onClick={() => setStep(1)}
              className="w-full text-xs text-[#71717a] hover:text-white transition-colors"
            >
               Volver a mi información
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
