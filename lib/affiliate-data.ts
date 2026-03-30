// ============================================================
// Tipos y datos mock para el Sistema de Afiliados
// ============================================================

export type AffiliateStatus = 'active' | 'pending' | 'suspended'
export type PayoutStatus = 'pending' | 'approved' | 'paid'
export type SaleStatus = 'completed' | 'refunded' | 'pending'

export interface BankData {
  rut: string
  bank: string
  accountType: 'corriente' | 'vista' | 'ahorro'
  accountNumber: string
  holderName: string
}

export interface Affiliate {
  id: string
  name: string
  email: string
  code: string
  commissionRate: number // porcentaje, ej. 20
  status: AffiliateStatus
  joinedAt: string
  bankData?: BankData
  totalClicks: number
  totalSales: number
  totalEarned: number
  pendingPayout: number
}

export interface Click {
  id: string
  affiliateCode: string
  timestamp: string
  source: string
  ip?: string
  converted: boolean
}

export interface Sale {
  id: string
  affiliateCode: string
  timestamp: string
  amount: number
  commission: number
  status: SaleStatus
  courseId: string
  courseName: string
}

export interface Payout {
  id: string
  affiliateId: string
  affiliateName: string
  amount: number
  status: PayoutStatus
  requestedAt: string
  processedAt?: string
  proofUrl?: string
  bankData?: BankData
}

export interface GlobalMetrics {
  totalClicks: number
  totalSales: number
  totalCommissionsPaid: number
  totalCommissionsPending: number
  conversionRate: number
  activeAffiliates: number
}

// ============================================================
// DATOS MOCK / SEED
// ============================================================

export const COURSE_PRICE = 1897 // USD

export const mockAffiliates: Affiliate[] = [
  {
    id: 'aff-001',
    name: 'Carlos Mendoza',
    email: 'carlos@example.com',
    code: 'CARLOS20',
    commissionRate: 20,
    status: 'active',
    joinedAt: '2026-02-01T10:00:00Z',
    totalClicks: 847,
    totalSales: 12,
    totalEarned: 4552.8,
    pendingPayout: 1138.2,
    bankData: {
      rut: '12.345.678-9',
      bank: 'Banco Estado',
      accountType: 'corriente',
      accountNumber: '00123456789',
      holderName: 'Carlos Mendoza',
    },
  },
  {
    id: 'aff-002',
    name: 'María González',
    email: 'maria@example.com',
    code: 'MARIA20',
    commissionRate: 25,
    status: 'active',
    joinedAt: '2026-02-15T10:00:00Z',
    totalClicks: 1203,
    totalSales: 19,
    totalEarned: 9004.75,
    pendingPayout: 2376.25,
    bankData: {
      rut: '98.765.432-1',
      bank: 'Banco Santander',
      accountType: 'vista',
      accountNumber: '00987654321',
      holderName: 'María González',
    },
  },
  {
    id: 'aff-003',
    name: 'Diego Fuentes',
    email: 'diego@example.com',
    code: 'DIEGO20',
    commissionRate: 20,
    status: 'pending',
    joinedAt: '2026-03-10T10:00:00Z',
    totalClicks: 234,
    totalSales: 3,
    totalEarned: 1138.2,
    pendingPayout: 1138.2,
  },
  {
    id: 'aff-004',
    name: 'Valentina Ramos',
    email: 'vale@example.com',
    code: 'VALE20',
    commissionRate: 20,
    status: 'active',
    joinedAt: '2026-01-20T10:00:00Z',
    totalClicks: 2100,
    totalSales: 31,
    totalEarned: 11753.4,
    pendingPayout: 0,
    bankData: {
      rut: '15.222.333-4',
      bank: 'Banco de Chile',
      accountType: 'corriente',
      accountNumber: '00152223334',
      holderName: 'Valentina Ramos',
    },
  },
]

// El afiliado logueado en el portal (primer afiliado)
export const currentAffiliate: Affiliate = mockAffiliates[0]

// Clicks de los últimos 14 días
const generateClicks = (code: string, count: number): Click[] => {
  const sources = ['instagram', 'twitter', 'linkedin', 'email', 'whatsapp', 'directo']
  return Array.from({ length: count }, (_, i) => {
    const daysAgo = Math.floor(Math.random() * 14)
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return {
      id: `click-${code}-${i}`,
      affiliateCode: code,
      timestamp: date.toISOString(),
      source: sources[Math.floor(Math.random() * sources.length)],
      converted: Math.random() < 0.014, // ~1.4% conversion
    }
  }).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
}

export const mockClicks: Click[] = generateClicks('CARLOS20', 47)

export const mockSales: Sale[] = [
  {
    id: 'sale-001',
    affiliateCode: 'CARLOS20',
    timestamp: '2026-03-28T15:30:00Z',
    amount: COURSE_PRICE,
    commission: COURSE_PRICE * 0.2,
    status: 'completed',
    courseId: 'vibe-coder-bootcamp',
    courseName: 'Vibe Coder Bootcamp',
  },
  {
    id: 'sale-002',
    affiliateCode: 'CARLOS20',
    timestamp: '2026-03-25T11:00:00Z',
    amount: COURSE_PRICE,
    commission: COURSE_PRICE * 0.2,
    status: 'completed',
    courseId: 'vibe-coder-bootcamp',
    courseName: 'Vibe Coder Bootcamp',
  },
  {
    id: 'sale-003',
    affiliateCode: 'CARLOS20',
    timestamp: '2026-03-20T09:15:00Z',
    amount: COURSE_PRICE,
    commission: COURSE_PRICE * 0.2,
    status: 'completed',
    courseId: 'vibe-coder-bootcamp',
    courseName: 'Vibe Coder Bootcamp',
  },
  {
    id: 'sale-004',
    affiliateCode: 'CARLOS20',
    timestamp: '2026-03-15T14:22:00Z',
    amount: COURSE_PRICE,
    commission: COURSE_PRICE * 0.2,
    status: 'completed',
    courseId: 'vibe-coder-bootcamp',
    courseName: 'Vibe Coder Bootcamp',
  },
  {
    id: 'sale-005',
    affiliateCode: 'CARLOS20',
    timestamp: '2026-03-10T16:45:00Z',
    amount: COURSE_PRICE,
    commission: COURSE_PRICE * 0.2,
    status: 'completed',
    courseId: 'vibe-coder-bootcamp',
    courseName: 'Vibe Coder Bootcamp',
  },
  {
    id: 'sale-006',
    affiliateCode: 'CARLOS20',
    timestamp: '2026-03-05T10:30:00Z',
    amount: COURSE_PRICE,
    commission: COURSE_PRICE * 0.2,
    status: 'pending',
    courseId: 'vibe-coder-bootcamp',
    courseName: 'Vibe Coder Bootcamp',
  },
]

export const mockPayouts: Payout[] = [
  {
    id: 'payout-001',
    affiliateId: 'aff-001',
    affiliateName: 'Carlos Mendoza',
    amount: 3414.6,
    status: 'paid',
    requestedAt: '2026-03-01T10:00:00Z',
    processedAt: '2026-03-05T14:00:00Z',
    proofUrl: '/comprobante-marzo.pdf',
    bankData: mockAffiliates[0].bankData,
  },
  {
    id: 'payout-002',
    affiliateId: 'aff-001',
    affiliateName: 'Carlos Mendoza',
    amount: 1138.2,
    status: 'pending',
    requestedAt: '2026-03-25T10:00:00Z',
    bankData: mockAffiliates[0].bankData,
  },
  {
    id: 'payout-003',
    affiliateId: 'aff-002',
    affiliateName: 'María González',
    amount: 6628.5,
    status: 'paid',
    requestedAt: '2026-03-01T10:00:00Z',
    processedAt: '2026-03-05T14:00:00Z',
    proofUrl: '/comprobante-maria-marzo.pdf',
    bankData: mockAffiliates[1].bankData,
  },
  {
    id: 'payout-004',
    affiliateId: 'aff-002',
    affiliateName: 'María González',
    amount: 2376.25,
    status: 'approved',
    requestedAt: '2026-03-25T10:00:00Z',
    bankData: mockAffiliates[1].bankData,
  },
  {
    id: 'payout-005',
    affiliateId: 'aff-003',
    affiliateName: 'Diego Fuentes',
    amount: 1138.2,
    status: 'pending',
    requestedAt: '2026-03-28T10:00:00Z',
    bankData: undefined,
  },
]

// ============================================================
// Helpers
// ============================================================

export function getClicksByDay(clicks: Click[], days = 14) {
  const result: { date: string; clics: number; conversiones: number }[] = []
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    const dateStr = date.toLocaleDateString('es-CL', { month: 'short', day: 'numeric' })
    const dayClicks = clicks.filter((c) => {
      const clickDate = new Date(c.timestamp)
      return clickDate.toDateString() === date.toDateString()
    })
    result.push({
      date: dateStr,
      clics: dayClicks.length,
      conversiones: dayClicks.filter((c) => c.converted).length,
    })
  }
  return result
}

export function getGlobalMetrics(): GlobalMetrics {
  const allSales = mockAffiliates.flatMap(() => mockSales)
  return {
    totalClicks: mockAffiliates.reduce((sum, a) => sum + a.totalClicks, 0),
    totalSales: mockAffiliates.reduce((sum, a) => sum + a.totalSales, 0),
    totalCommissionsPaid: mockPayouts
      .filter((p) => p.status === 'paid')
      .reduce((sum, p) => sum + p.amount, 0),
    totalCommissionsPending: mockAffiliates.reduce((sum, a) => sum + a.pendingPayout, 0),
    conversionRate: 1.4,
    activeAffiliates: mockAffiliates.filter((a) => a.status === 'active').length,
  }
}

export function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-CL', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export const BANKS = [
  'Banco Estado',
  'Banco de Chile',
  'Banco Santander',
  'BCI',
  'Scotiabank',
  'Itaú',
  'BICE',
  'Banco Falabella',
  'Banco Ripley',
  'Tenpo / Mach (cuenta vista)',
]

export const BASE_URL = 'https://cl.aiengineerbuilder.protolylat.com'
