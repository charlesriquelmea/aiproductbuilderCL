// ============================================================
// Cliente mock de Frappe LMS
// En producción, reemplazar BASE_URL y usar fetch() real
// ============================================================

const FRAPPE_BASE_URL = process.env.NEXT_PUBLIC_FRAPPE_URL || 'https://lms.protolylat.com'

export interface FrappeCourse {
  name: string
  title: string
  enrollments: number
  price: number
  status: 'Published' | 'Draft'
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
const mockCourses: FrappeCourse[] = [
  {
    name: 'vibe-coder-bootcamp',
    title: 'Vibe Coder Bootcamp — Cohort #1',
    enrollments: 65,
    price: 1897,
    status: 'Published',
  },
]

const mockEnrollments: FrappeEnrollment[] = [
  { student: 'user-001', course: 'vibe-coder-bootcamp', enrolled_on: '2026-03-28', referral_code: 'CARLOS20' },
  { student: 'user-002', course: 'vibe-coder-bootcamp', enrolled_on: '2026-03-25', referral_code: 'MARIA20' },
  { student: 'user-003', course: 'vibe-coder-bootcamp', enrolled_on: '2026-03-22', referral_code: 'CARLOS20' },
  { student: 'user-004', course: 'vibe-coder-bootcamp', enrolled_on: '2026-03-20', referral_code: 'VALE20' },
  { student: 'user-005', course: 'vibe-coder-bootcamp', enrolled_on: '2026-03-18', referral_code: 'MARIA20' },
]

// Simula latencia de red
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms))

export const frappeLMS = {
  /**
   * Obtiene todos los cursos publicados
   * Endpoint real: GET /api/method/lms.lms.api.get_courses
   */
  async getCourses(): Promise<FrappeCourse[]> {
    await delay(300)
    return mockCourses
  },

  /**
   * Obtiene matrículas de un curso, opcionalmente filtradas por código de referido
   * Endpoint real: GET /api/method/lms.lms.api.get_enrollments?course=xxx
   */
  async getEnrollments(courseId: string, referralCode?: string): Promise<FrappeEnrollment[]> {
    await delay(200)
    return mockEnrollments
      .filter((e) => e.course === courseId)
      .filter((e) => !referralCode || e.referral_code === referralCode)
  },

  /**
   * Busca un usuario por código de referido
   * Endpoint real: GET /api/method/lms.lms.api.get_user_by_ref?ref=xxx
   */
  async getUserByRef(ref: string): Promise<FrappeUser | null> {
    await delay(150)
    const users: FrappeUser[] = [
      { name: 'carlos@example.com', email: 'carlos@example.com', full_name: 'Carlos Mendoza', referral_code: 'CARLOS20' },
      { name: 'maria@example.com', email: 'maria@example.com', full_name: 'María González', referral_code: 'MARIA20' },
    ]
    return users.find((u) => u.referral_code === ref) || null
  },

  /**
   * Registra un click de referido
   * Endpoint real: POST /api/method/lms.lms.api.track_referral_click
   */
  async trackClick(ref: string, source?: string): Promise<void> {
    await delay(100)
    console.log(`[Frappe LMS Mock] Click tracked: ref=${ref}, source=${source}`)
  },
}
