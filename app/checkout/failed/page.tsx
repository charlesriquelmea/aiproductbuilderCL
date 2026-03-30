'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { XCircle, RefreshCcw, ArrowLeft, Mail } from 'lucide-react'

export default function FailedPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 10, stiffness: 100 }}
            className="size-24 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(239,68,68,0.2)]"
          >
            <XCircle className="size-12 text-red-500" strokeWidth={3} />
          </motion.div>

          {/* Heading & Reason */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ups, algo salió mal
            </h1>
            <p className="text-[#a1a1aa] text-lg">
              No pudimos procesar tu pago en este momento. Puede que haya un problema con tu método de pago o con la conexión bancaria.
            </p>
          </motion.div>

          {/* Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-3xl bg-[#111111] border border-[#27272a] shadow-2xl space-y-8"
          >
             <div className="space-y-4">
                <button 
                  onClick={() => router.back()}
                  className="w-full py-4 rounded-xl bg-white hover:bg-[#e4e4e7] text-black font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                   <RefreshCcw className="w-4 h-4" />
                   Intentar de nuevo
                </button>
                
                <button 
                  onClick={() => router.push('/courses')}
                  className="w-full py-3 rounded-xl border border-[#27272a] text-[#71717a] hover:text-white hover:bg-[#1a1a1a] text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                   <ArrowLeft className="w-3 h-3" />
                   Volver al catálogo
                </button>
             </div>

             <div className="pt-6 border-t border-[#27272a]">
                <p className="text-xs text-[#71717a] mb-4">¿Necesitas ayuda con tu pago?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                   <a 
                     href="mailto:soporte@protolylat.com"
                     className="flex-1 p-3 rounded-xl bg-[#1a1a1a]/50 border border-[#27272a] flex items-center justify-center gap-3 hover:border-violet/40 transition-colors"
                   >
                      <Mail className="w-4 h-4 text-violet" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">Email Soporte</span>
                   </a>
                   <div className="flex-1 p-3 rounded-xl bg-[#1a1a1a]/50 border border-[#27272a] flex items-center justify-center gap-3">
                      <span className="text-[10px] font-bold text-[#71717a] uppercase tracking-widest leading-none">
                         WhatsApp: +56 9 XXXX XXXX
                      </span>
                   </div>
                </div>
             </div>
          </motion.div>

          <p className="text-[10px] text-[#3f3f46] font-mono uppercase tracking-widest italic">
             Si el cargo aparece en tu cuenta pero no recibiste el email, contáctanos.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  )
}
