'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CheckoutForm } from '@/components/checkout/checkout-form'
import { frappeLMS, FrappeCourse } from '@/lib/frappe-lms'
import { ArrowLeft, ShieldCheck, Lock, Globe, CreditCard } from 'lucide-react'

export default function CheckoutPage() {
  const { slug } = useParams()
  const router = useRouter()
  const [course, setCourse] = useState<FrappeCourse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await frappeLMS.getCourseDetail(slug as string)
      setCourse(data)
      setLoading(false)
    }
    fetchCourse()
  }, [slug])

  if (loading) return null

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-white">Producto no encontrado.</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-xs font-bold text-[#71717a] hover:text-white transition-colors uppercase tracking-widest mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al curso
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info & Confidence */}
            <div className="space-y-10">
               <div>
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                     Estás a un paso de comenzar tu formación.
                  </h1>
                  <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed max-w-md">
                     Completa tus datos para procesar el pago seguro vía MercadoPago. Recibirás tus credenciales de acceso inmediatamente después.
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                     { icon: ShieldCheck, title: "Compra Protegida", desc: "Tus datos están encriptados y seguros." },
                     { icon: Globe, title: "Acceso Global", desc: "Desde cualquier país con MercadoPago." },
                     { icon: Lock, title: "Privacidad", desc: "No compartimos tu información con terceros." },
                     { icon: CreditCard, title: "Pago Seguro", desc: "Redirect oficial a Checkout Pro." },
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="size-10 rounded-xl bg-violet/10 border border-violet/20 flex items-center justify-center shrink-0">
                           <item.icon className="w-5 h-5 text-violet" />
                        </div>
                        <div>
                           <h4 className="text-sm font-bold text-white">{item.title}</h4>
                           <p className="text-xs text-[#71717a] mt-1">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Stats or Proof */}
               <div className="p-6 rounded-2xl bg-violet/5 border border-violet/10">
                  <p className="text-xs text-[#a1a1aa] leading-relaxed italic">
                     "El flujo de inscripción fue increíblemente rápido. Pagué y en menos de 1 minuto ya estaba explorando las primeras lecciones del bootcamp."
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                     <div className="size-6 rounded-full bg-slate-800" />
                     <p className="text-[10px] font-bold text-white uppercase tracking-widest">Juan M. — Alumno Cohort #1</p>
                  </div>
               </div>
            </div>

            {/* Right: Checkout Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-10 rounded-3xl bg-[#111111] border border-[#27272a] shadow-2xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <CreditCard className="size-32 text-white" />
               </div>
               
               <CheckoutForm course={course} />
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
