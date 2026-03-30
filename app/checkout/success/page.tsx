'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CheckCircle2, Mail, ArrowRight, Zap, ExternalLink } from 'lucide-react'
import { Suspense } from 'react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const ref = searchParams.get('ref')
  const course = searchParams.get('course')

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        className="size-24 rounded-full bg-neon-green/20 border-2 border-neon-green flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(34,197,94,0.3)]"
      >
        <CheckCircle2 className="size-12 text-neon-green" strokeWidth={3} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ¡Pago Exitoso!
        </h1>
        <p className="text-[#a1a1aa] text-lg">
          Gracias por confiar en Protolylat. Tu inscripción a <span className="text-white font-bold">{course || 'nuestro curso'}</span> ha sido procesada correctamente.
        </p>
      </motion.div>

      {/* Access Steps Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="p-8 rounded-3xl bg-[#111111] border border-[#27272a] shadow-2xl space-y-6"
      >
        <div className="flex items-center gap-3 justify-center mb-4">
          <Mail className="w-5 h-5 text-violet" />
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">Siguientes Pasos</h3>
        </div>

        <div className="space-y-4 text-left">
           {[
             { step: 1, text: "Recibirás un email con tus credenciales de acceso (Usuario y Password)." },
             { step: 2, text: "Ingresa al LMS usando el link proporcionado en el correo." },
             { step: 3, text: "Busca tu curso en el Dashboard y ¡comienza a aprender!" },
           ].map((item) => (
             <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-[#1a1a1a]/50 border border-[#27272a]">
                <div className="size-6 rounded-lg bg-violet/20 border border-violet/30 flex items-center justify-center font-mono text-xs font-bold text-violet shrink-0">
                   {item.step}
                </div>
                <p className="text-sm text-[#a1a1aa] leading-relaxed italic">{item.text}</p>
             </div>
           ))}
        </div>

        <div className="pt-4 space-y-4">
          <button 
            onClick={() => window.open('https://lms.protolylat.com', '_blank')}
            className="w-full py-4 rounded-xl bg-violet hover:bg-violet-600 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-violet/20"
          >
            Ir al LMS
            <ExternalLink className="w-4 h-4" />
          </button>
          
          <button 
             onClick={() => router.push('/courses')}
             className="w-full py-3 rounded-xl border border-[#27272a] text-[#71717a] hover:text-white hover:bg-[#1a1a1a] text-xs font-bold transition-all uppercase tracking-widest"
          >
             Explorar más cursos
          </button>
        </div>
      </motion.div>

      <p className="text-[10px] text-[#3f3f46] font-mono uppercase tracking-widest">
         Reference ID: {ref || 'REF_MOCK_12345'}
      </p>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-white text-center">Cargando confirmación...</div>}>
          <SuccessContent />
        </Suspense>
      </section>
      <Footer />
    </main>
  )
}
