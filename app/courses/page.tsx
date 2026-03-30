'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CourseCard } from '@/components/courses/course-card'
import { frappeLMS, FrappeCourse } from '@/lib/frappe-lms'
import { Search, SlidersHorizontal, Rocket, LayoutGrid } from 'lucide-react'

export default function CoursesPage() {
  const [courses, setCourses] = useState<FrappeCourse[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await frappeLMS.getPublishedCourses()
      setCourses(data)
      setLoading(false)
    }
    fetchCourses()
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Section for Catalog */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.1),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
              <span className="text-xs font-mono text-violet uppercase tracking-widest mb-4 inline-block">
                 Catálogo Protolylat
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                 Explora los <span className="text-violet">Cursos & Masterclasses</span>
              </h1>
              <p className="text-sm md:text-lg text-[#71717a] max-w-2xl mx-auto leading-relaxed">
                 Domina el stack moderno de IA, Vibe Coding y automatizaciones. Contenido curado para convertirte en un Product Builder autónomo.
              </p>
           </motion.div>
        </div>
      </section>

      {/* Filters & Tools */}
      <section className="pb-10">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-[#27272a] pb-8">
               <div className="relative w-full md:w-96 group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a] group-hover:text-violet transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Buscar un curso..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-[#111111] border border-[#27272a] rounded-xl text-xs text-white focus:outline-none focus:border-violet/50 transition-colors"
                  />
               </div>
               <div className="flex items-center gap-4 w-full md:w-auto">
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-[#111111] border border-[#27272a] rounded-xl text-xs text-[#71717a] hover:text-white transition-colors">
                     <SlidersHorizontal className="w-3.5 h-3.5" />
                     Filtros
                  </button>
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-[#111111] border border-[#27272a] rounded-xl text-xs text-[#71717a] hover:text-white transition-colors">
                     <LayoutGrid className="w-3.5 h-3.5" />
                     Vista
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Grid */}
      <section className="pb-32 min-h-[400px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           {loading ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="aspect-video rounded-2xl bg-[#111111] border border-[#27272a] animate-pulse" />
                ))}
             </div>
           ) : (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                   <CourseCard key={course.name} course={course} />
                ))}
             </div>
           )}

           {!loading && courses.length === 0 && (
              <div className="py-20 flex flex-col items-center justify-center text-center">
                 <div className="w-16 h-16 rounded-full bg-violet/10 flex items-center justify-center mb-4">
                    <Rocket className="w-8 h-8 text-violet/40" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">No encontramos cursos</h3>
                 <p className="text-sm text-[#71717a]">Vuelve pronto para ver los nuevos contenidos.</p>
              </div>
           )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
