'use client'

import { motion } from 'framer-motion'
import { Play, PlayCircle, Info, X } from 'lucide-react'
import { FrappeLesson } from '@/lib/frappe-lms'

interface PreviewPlayerProps {
  lesson: FrappeLesson
  onClose: () => void
}

export function PreviewPlayer({ lesson, onClose }: PreviewPlayerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
    >
      <div className="relative w-full max-w-5xl bg-[#0d0d0d] border border-[#27272a] rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-violet/20 border border-violet/30">
              <Play className="w-4 h-4 text-violet fill-violet" />
            </div>
            <div>
              <p className="text-[10px] text-violet font-bold uppercase tracking-widest leading-none mb-1">
                Preview de Curso
              </p>
              <h3 className="text-sm md:text-base font-bold text-white leading-none">
                {lesson.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-[#71717a] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Player Placeholder */}
        <div className="aspect-video bg-[#111111] flex items-center justify-center relative group">
          <div className="absolute inset-0 bg-linear-to-br from-violet/5 to-transparent pointer-events-none" />
          
          {/* Mock Video Element */}
          <div className="relative flex flex-col items-center gap-4">
             <motion.div
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
               className="size-20 rounded-full bg-violet/20 border-2 border-violet/50 flex items-center justify-center cursor-pointer hover:bg-violet/30 transition-colors"
             >
                <PlayCircle className="w-10 h-10 text-white fill-white/10" />
             </motion.div>
             <p className="text-xs font-mono text-[#71717a] uppercase tracking-widest group-hover:text-[#a1a1aa] transition-colors">
                Haz clic para reproducir (Demo)
             </p>
          </div>

          {/* Player controls mock */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between border-t border-white/5 bg-black/40">
             <div className="flex items-center gap-4 text-xs font-mono text-[#71717a]">
                <div className="w-32 h-1 bg-[#27272a] rounded-full overflow-hidden">
                   <div className="w-1/3 h-full bg-violet" />
                </div>
                <span>00:00 / {lesson.duration || '05:00'}</span>
             </div>
             <div className="flex items-center gap-4">
                <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-[#71717a]">1080p</div>
             </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="p-4 md:p-6 bg-[#1a1a1a] border-t border-[#27272a] flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="flex items-center gap-3">
              <Info className="w-4 h-4 text-violet" />
              <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-lg">
                Estás viendo una lección de prueba. Para acceder al curso completo, sus materiales y soporte, debes realizar la compra.
              </p>
           </div>
           {/* CTA */}
           <button 
             onClick={onClose}
             className="w-full md:w-auto px-6 py-2 rounded-xl bg-violet hover:bg-violet-600 text-white text-xs font-bold transition-all shadow-lg shadow-violet/20"
           >
              Comprar Curso
           </button>
        </div>
      </div>
    </motion.div>
  )
}
