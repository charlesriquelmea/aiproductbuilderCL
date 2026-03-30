'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CourseSyllabus } from '@/components/courses/course-syllabus'
import { PreviewPlayer } from '@/components/courses/preview-player'
import { frappeLMS, FrappeCourse, FrappeLesson } from '@/lib/frappe-lms'
import { 
  Users, 
  Clock, 
  BookOpen, 
  CheckCircle, 
  ArrowRight, 
  PlayCircle,
  Star,
  Zap,
  Globe
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function CourseDetailPage() {
  const { slug } = useParams()
  const router = useRouter()
  const [course, setCourse] = useState<FrappeCourse | null>(null)
  const [loading, setLoading] = useState(true)
  const [activePreview, setActivePreview] = useState<FrappeLesson | null>(null)

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await frappeLMS.getCourseDetail(slug as string)
      setCourse(data)
      setLoading(false)
    }
    fetchDetail()
  }, [slug])

  if (loading) return null

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-white">Curso no encontrado.</p>
      </div>
    )
  }

  const handlePreview = (lesson: FrappeLesson) => {
    setActivePreview(lesson)
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
           >
              <div className="flex flex-wrap items-center gap-2 mb-6 font-mono text-[10px] uppercase tracking-widest text-[#71717a]">
                 <Badge variant="outline" className="border-violet/30 text-violet bg-violet/5">
                    Founding Cohort
                 </Badge>
                 <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> 8 Semanas</span>
                 <span className="flex items-center gap-1.5"><BookOpen className="w-3 h-3" /> 24 Lecciones</span>
                 <span className="flex items-center gap-1.5"><Globe className="w-3 h-3" /> Español</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                 {course.title}
              </h1>
              
              <p className="text-sm md:text-lg text-[#a1a1aa] leading-relaxed mb-8 max-w-xl">
                 {course.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                 <button 
                   onClick={() => router.push(`/checkout/${course.name}`)}
                   className="px-8 py-4 rounded-xl bg-neon-green hover:bg-[#16a34a] text-black font-bold text-sm transition-all shadow-xl shadow-neon-green/10 flex items-center justify-center gap-2"
                 >
                    <Zap className="w-4 h-4 fill-black" />
                    Comprar ahora por ${course.price.toLocaleString()} {course.currency}
                 </button>
                 {/* <button className="px-8 py-4 rounded-xl bg-[#111111] border border-[#27272a] text-white font-bold text-sm hover:bg-[#1a1a1a] transition-all flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 text-violet fill-violet" />
                    Beca disponible
                 </button> */}
              </div>

              <div className="flex items-center gap-1.5">
                 <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                       <div key={i} className="size-8 rounded-full border-2 border-[#0a0a0a] bg-[#1a1a1a] overflow-hidden">
                          <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" width={32} height={32} />
                       </div>
                    ))}
                 </div>
                 <p className="text-[10px] text-[#71717a] font-mono uppercase tracking-wider ml-2">
                    +65 constructores se han unido
                 </p>
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-2xl"
           >
              {course.image && (
                 <Image 
                   src={course.image} 
                   alt={course.title} 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-700"
                 />
              )}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                 <button 
                    onClick={() => course.syllabus && handlePreview(course.syllabus[0].lessons[0])}
                    className="size-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-transform group/play"
                 >
                    <PlayCircle className="size-10 text-white fill-white/10 group-hover/play:text-violet transition-colors" />
                 </button>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-[#0a0a0a] relative">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
            
            {/* Left: Syllabus & Content */}
            <div className="lg:col-span-2 space-y-12">
               <div>
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                     <BookOpen className="w-6 h-6 text-violet" />
                     ¿Qué aprenderás?
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                     {[
                        "Aprenderás a construir aplicaciones sin saber código",
                        "Dominarás herramientas de IA como v0, Cursor y Claude",
                        "Arquitectura de bases de datos persistentes",
                        "Integración de pagos con MercadoPago y Stripe",
                        "Deployment real en servidores profesionales",
                        "Monetización y escalado de productos digitales"
                     ].map(benefit => (
                        <div key={benefit} className="flex gap-3 text-sm text-[#a1a1aa] items-start p-4 rounded-xl bg-[#111111] border border-[#27272a]/50">
                           <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0" />
                           {benefit}
                        </div>
                     ))}
                  </div>
               </div>

               <div>
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                     <LayoutGrid className="w-6 h-6 text-violet" />
                     Temario del Programa
                  </h2>
                  {course.syllabus && (
                     <CourseSyllabus 
                        syllabus={course.syllabus} 
                        onPreviewClick={handlePreview} 
                     />
                  )}
               </div>
            </div>

            {/* Right: Instructor & Sidebar Info */}
            <div className="space-y-8">
               <div className="p-8 rounded-3xl bg-[#111111] border border-[#27272a] sticky top-24">
                  <div className="flex items-center gap-4 mb-6">
                     {course.instructor_image && (
                        <div className="relative size-16 rounded-2xl overflow-hidden border border-white/10">
                           <Image src={course.instructor_image} alt={course.instructor_name || ''} fill />
                        </div>
                     )}
                     <div>
                        <p className="text-xs text-violet font-bold uppercase tracking-widest leading-none mb-1">Instructor</p>
                        <h4 className="text-lg font-bold text-white">{course.instructor_name}</h4>
                        <p className="text-xs text-[#71717a]">Fundador Protolylat</p>
                     </div>
                  </div>
                  
                  <p className="text-sm text-[#71717a] leading-relaxed mb-6">
                     Apasionado por democratizar la tecnología. He ayudado a más de 200 personas a construir sus herramientas sin código de forma ágil y profesional.
                  </p>

                  <div className="space-y-3 mb-8">
                     <p className="text-[10px] text-white font-bold uppercase tracking-widest mb-4 block">Incluye Acceso VIP</p>
                     {[
                        "Discord exclusivo de constructores",
                        "Sesiones en vivo semanales",
                        "Certificado de finalización",
                        "Acceso de por vida al contenido"
                     ].map(item => (
                        <div key={item} className="flex items-center gap-3 text-xs text-[#a1a1aa]">
                           <div className="size-1.5 rounded-full bg-violet" />
                           {item}
                        </div>
                     ))}
                  </div>

                  <button 
                    onClick={() => router.push(`/checkout/${course.name}`)}
                    className="w-full py-4 rounded-xl bg-violet hover:bg-violet-600 text-white font-bold text-sm transition-all shadow-xl shadow-violet/20 flex items-center justify-center gap-2"
                  >
                     Comprar Curso
                     <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </div>

         </div>
      </section>

      <Footer />

      {/* Preview Player Overlay */}
      <AnimatePresence>
         {activePreview && (
            <PreviewPlayer 
               lesson={activePreview} 
               onClose={() => setActivePreview(null)} 
            />
         )}
      </AnimatePresence>
    </main>
  )
}

function LayoutGrid(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}
