// ============================================================
// Cliente mock de Frappe LMS
// En producción, reemplazar BASE_URL y usar fetch() real
// ============================================================

const FRAPPE_BASE_URL = process.env.NEXT_PUBLIC_FRAPPE_URL || 'https://lms.protolylat.com'

export interface FrappeLesson {
  name: string
  title: string
  duration?: string
  is_preview?: boolean
  type: 'Video' | 'Article' | 'Quiz'
}

export interface FrappeModule {
  name: string
  title: string
  lessons: FrappeLesson[]
}

export interface FrappeCourse {
  name: string
  title: string
  short_description?: string
  description?: string
  image?: string
  instructor_name?: string
  instructor_image?: string
  enrollments: number
  price: number
  currency?: string
  status: 'Published' | 'Draft'
  syllabus?: FrappeModule[]
}

export interface FrappeEnrollment {
  student: string
  course: string
  enrolled_on: string
  referral_code?: string
}

export interface FrappeUser {
  name: string
  email: string
  full_name: string
  referral_code?: string
}

// Datos mock simulando respuesta de Frappe LMS
const mockDetailedCourses: FrappeCourse[] = [
  {
    name: 'vibe-coder-bootcamp',
    title: 'Vibe Coder Bootcamp — Cohort #1',
    short_description: 'De no saber programar a construir apps reales con IA en 8 semanas.',
    description: 'Aprende Vibe Coding: arquitectura + herramientas de IA para construir, desplegar y monetizar aplicaciones. Programa intensivo teórico-práctico.',
    image: 'https://media.istockphoto.com/id/1975127828/photo/chatbot-chat-with-ai-ai-tech-digital-chatbot-robot-application-openai-generate-artificial.jpg?s=170667a&w=0&k=20&c=8AmUjOina2kJr2x2yifcRLNTPnZVP8Hqdb1MaOT_zpc=',
    instructor_name: 'Carlos Riquelme',
    instructor_image: 'https://static.vecteezy.com/system/resources/previews/009/749/751/non_2x/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg',
    enrollments: 65,
    price: 1897,
    currency: 'USD',
    status: 'Published',
    syllabus: [
      {
        name: 'mod-1',
        title: 'Módulo 1: Fundamentos y Captura',
        lessons: [
          { name: 'les-1-1', title: 'Bienvenida al Bootcamp', duration: '5:00', is_preview: true, type: 'Video' },
          { name: 'les-1-2', title: 'Mentalidad de AI Product Builder', duration: '12:00', is_preview: true, type: 'Video' },
          { name: 'les-1-3', title: 'Configuración del Entorno', duration: '15:00', is_preview: false, type: 'Video' },
        ]
      },
      {
        name: 'mod-2',
        title: 'Módulo 2: Backend & Data Logic',
        lessons: [
          { name: 'les-2-1', title: 'Introducción a APIs y Webhooks', duration: '18:00', is_preview: false, type: 'Video' },
          { name: 'les-2-2', title: 'Modelado de Datos con Supabase', duration: '25:00', is_preview: false, type: 'Video' },
        ]
      }
    ]
  },
  {
    name: 'ai-agents-automation',
    title: 'AI Agents & Automation Masterclass',
    short_description: 'Domina n8n y LangChain para crear flujos de trabajo autónomos.',
    description: 'Curso avanzado sobre la creación de agentes de IA que pueden razonar, usar herramientas y ejecutar tareas complejas de forma autónoma.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.s0x8iREZM7x-TCr06rYmSgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    instructor_name: 'Carlos Riquelme',
    instructor_image: 'https://static.vecteezy.com/system/resources/previews/009/749/751/non_2x/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg',
    enrollments: 120,
    price: 497,
    currency: 'USD',
    status: 'Published',
    syllabus: [
      {
        name: 'mod-a-1',
        title: 'Intro a Agentes',
        lessons: [
          { name: 'les-a-1', title: '¿Qué es un AI Agent?', duration: '10:00', is_preview: true, type: 'Video' },
        ]
      }
    ]
  }
]

// Simula latencia de red
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms))

export const frappeLMS = {
  /**
   * Obtiene todos los cursos publicados
   */
  async getPublishedCourses(): Promise<FrappeCourse[]> {
    await delay(400)
    return mockDetailedCourses.filter(c => c.status === 'Published')
  },

  /**
   * Obtiene el detalle de un curso por slug (name)
   */
  async getCourseDetail(slug: string): Promise<FrappeCourse | null> {
    await delay(300)
    return mockDetailedCourses.find(c => c.name === slug) || null
  },

  /**
   * Inicia el proceso de checkout
   */
  async initiateCheckout(data: { name: string; email: string; course_name: string }): Promise<{ checkout_url: string; external_reference: string }> {
    await delay(1200) // Simular creación de Integration Request
    const external_reference = `checkout_${Math.random().toString(36).substring(7)}`
    
    // En producción esto vendría de Frappe API
    return {
      checkout_url: `/checkout/success?ref=${external_reference}&course=${data.course_name}`, // Redirección interna mock
      external_reference
    }
  },

  /**
   * Obtiene el estado del pago
   */
  async getCheckoutStatus(ref: string): Promise<{ status: 'approved' | 'pending' | 'failed' }> {
    await delay(500)
    return { status: 'approved' }
  },

  /**
   * Obtiene matrículas por curso
   */
  async getEnrollments(courseId: string, referralCode?: string): Promise<FrappeEnrollment[]> {
    await delay(200)
    return [
      { student: 'user-001', course: 'vibe-coder-bootcamp', enrolled_on: '2026-03-28' }
    ]
  },

  /**
   * Busca usuario por ref
   */
  async getUserByRef(ref: string): Promise<FrappeUser | null> {
    await delay(150)
    return null
  },

  /**
   * Trackeo de Clicks
   */
  async trackClick(ref: string, source?: string): Promise<void> {
    await delay(100)
    console.log(`[Frappe LMS Mock] Click tracked: ref=${ref}, source=${source}`)
  },
}
