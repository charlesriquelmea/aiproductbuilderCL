'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, PlayCircle, FileText, CheckCircle2, Lock } from 'lucide-react'
import { useState } from 'react'
import { FrappeModule, FrappeLesson } from '@/lib/frappe-lms'

interface CourseSyllabusProps {
  syllabus: FrappeModule[]
  onPreviewClick: (lesson: FrappeLesson) => void
}

export function CourseSyllabus({ syllabus, onPreviewClick }: CourseSyllabusProps) {
  const [openModules, setOpenModules] = useState<string[]>([syllabus[0]?.name])

  const toggleModule = (name: string) => {
    setOpenModules((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    )
  }

  return (
    <div className="space-y-4">
      {syllabus.map((module, index) => (
        <div
          key={module.name}
          className="rounded-2xl border border-[#27272a] bg-[#111111] overflow-hidden"
        >
          <button
            onClick={() => toggleModule(module.name)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#1a1a1a] transition-colors group"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-violet font-bold bg-violet/10 px-2 py-1 rounded border border-violet/20">
                0{index + 1}
              </span>
              <h4 className="text-lg font-bold text-white group-hover:text-violet transition-colors">
                {module.title}
              </h4>
            </div>
            <motion.div
              animate={{ rotate: openModules.includes(module.name) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-[#71717a]" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openModules.includes(module.name) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 space-y-2">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.name}
                      className={`flex items-center justify-between p-3 rounded-xl border border-[#27272a]/50 group/lesson transition-all ${
                        lesson.is_preview 
                          ? 'bg-violet/5 hover:bg-violet/10 hover:border-violet/30 cursor-pointer' 
                          : 'bg-[#1a1a1a]/30 opacity-80'
                      }`}
                      onClick={() => lesson.is_preview && onPreviewClick(lesson)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          {lesson.is_preview ? (
                            <PlayCircle className="w-4 h-4 text-violet animate-pulse" />
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-[#3f3f46]" />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-sm font-medium ${lesson.is_preview ? 'text-white' : 'text-[#71717a]'}`}>
                            {lesson.title}
                          </span>
                          <span className="text-[10px] text-[#71717a] font-mono">
                            {lesson.type} • {lesson.duration || '5:00'} min
                          </span>
                        </div>
                      </div>

                      {lesson.is_preview ? (
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-violet uppercase tracking-widest bg-violet/10 px-2 py-0.5 rounded border border-violet/20">
                            Preview Gratis
                          </span>
                          <CheckCircle2 className="w-4 h-4 text-violet opacity-0 group-hover/lesson:opacity-100 transition-opacity" />
                        </div>
                      ) : (
                        <span className="text-[10px] font-bold text-[#3f3f46] uppercase tracking-widest">
                          Bloqueado
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
