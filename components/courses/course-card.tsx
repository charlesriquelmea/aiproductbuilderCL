'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, ArrowRight, PlayCircle } from 'lucide-react'
import { FrappeCourse } from '@/lib/frappe-lms'
import { Badge } from '@/components/ui/badge'

interface CourseCardProps {
  course: FrappeCourse
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#111111] border border-[#27272a] rounded-2xl overflow-hidden hover:border-violet/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* Course Image */}
      <div className="relative aspect-video overflow-hidden">
        {course.image ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-violet/20 to-violet/5 flex items-center justify-center">
            <PlayCircle className="w-12 h-12 text-violet/20" />
          </div>
        )}
        <div className="absolute top-4 right-4">
          <Badge className="bg-black/60 backdrop-blur-md border-white/10 text-white font-mono text-[10px] uppercase tracking-widest">
            {course.currency || 'USD'} ${course.price.toLocaleString()}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 text-[10px] text-[#71717a] font-bold uppercase tracking-wider">
            <Users className="w-3 h-3" />
            {course.enrollments.toLocaleString()} estudiantes
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet transition-colors leading-tight">
          {course.title}
        </h3>

        <p className="text-sm text-[#71717a] line-clamp-2 mb-6 flex-1">
          {course.short_description || 'Aprende las mejores técnicas de Vibe Coding y automatización.'}
        </p>

        <div className="pt-4 border-t border-[#27272a] flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            {course.instructor_image && (
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#3f3f46]">
                <Image src={course.instructor_image} alt={course.instructor_name || ''} fill />
              </div>
            )}
            <span className="text-[10px] font-medium text-[#a1a1aa] uppercase tracking-wide">
              {course.instructor_name || 'Protolylat'}
            </span>
          </div>

          <Link
            href={`/courses/${course.name}`}
            className="flex items-center gap-2 text-xs font-bold text-violet hover:text-white transition-colors group/link"
          >
            Ver Curso
            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
