'use client'

import { useState } from 'react'
import {
  Copy,
  Check,
  TrendingUp,
  DollarSign,
  MousePointerClick,
  Zap,
  ExternalLink,
  Share2,
} from 'lucide-react'
import { currentAffiliate, mockSales, mockClicks, formatCurrency, BASE_URL, COURSE_PRICE } from '@/lib/affiliate-data'

export default function AffiliateHome() {
  const [copied, setCopied] = useState(false)

  const affiliateLink = `${BASE_URL}?ref=${currentAffiliate.code}`

  const handleCopy = () => {
    navigator.clipboard.writeText(affiliateLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  // Stats rápidas
  const today = new Date().toDateString()
  const clicksToday = mockClicks.filter((c) => new Date(c.timestamp).toDateString() === today).length
  const pendingSales = mockSales.filter((s) => s.status === 'pending').length
  const pendingAmount = mockSales
    .filter((s) => s.status === 'pending')
    .reduce((sum, s) => sum + s.commission, 0)

  const stats = [
    {
      label: 'Clics Hoy',
      value: clicksToday.toString(),
      icon: MousePointerClick,
      color: 'from-blue-500/20 to-blue-600/10',
      iconColor: 'text-blue-400',
      border: 'border-blue-500/20',
    },
    {
      label: 'Ventas Totales',
      value: currentAffiliate.totalSales.toString(),
      icon: TrendingUp,
      color: 'from-violet-500/20 to-violet-600/10',
      iconColor: 'text-violet-400',
      border: 'border-violet-500/20',
    },
    {
      label: 'Comisión Ganada',
      value: formatCurrency(currentAffiliate.totalEarned),
      icon: DollarSign,
      color: 'from-green-500/20 to-green-600/10',
      iconColor: 'text-green-400',
      border: 'border-green-500/20',
    },
    {
      label: 'Pago Pendiente',
      value: formatCurrency(currentAffiliate.pendingPayout),
      icon: Zap,
      color: 'from-yellow-500/20 to-yellow-600/10',
      iconColor: 'text-yellow-400',
      border: 'border-yellow-500/20',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          ¡Hola, {currentAffiliate.name.split(' ')[0]}! 👋
        </h1>
        <p className="text-[#71717a] mt-1">
          Aquí está el resumen de tu actividad como afiliado de Protolylat.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className={`relative p-5 rounded-2xl bg-gradient-to-br ${stat.color} border ${stat.border} overflow-hidden group hover:scale-[1.02] transition-transform duration-200`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-[#71717a] font-medium">{stat.label}</p>
                  <p className="text-xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-xl bg-[#111111]/60 ${stat.iconColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Link generator */}
      <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a]">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20">
            <Share2 className="w-5 h-5 text-violet-400" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-white">Tu Link de Afiliado</h2>
            <p className="text-xs text-[#71717a]">Comparte este link para ganar comisiones</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#27272a] min-w-0">
            <ExternalLink className="w-4 h-4 text-[#71717a] flex-shrink-0" />
            <span className="text-sm text-[#71717a] font-mono truncate">{affiliateLink}</span>
          </div>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex-shrink-0 ${
              copied
                ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                : 'bg-violet-600 hover:bg-violet-500 text-white'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copiado
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copiar
              </>
            )}
          </button>
        </div>

        {/* Tips */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: 'Tasa de comisión', value: `${currentAffiliate.commissionRate}%` },
            { label: 'Precio del curso', value: `$${COURSE_PRICE.toLocaleString()} USD` },
            { label: 'Tu comisión / venta', value: formatCurrency(COURSE_PRICE * currentAffiliate.commissionRate / 100) },
          ].map((item) => (
            <div key={item.label} className="p-3 rounded-xl bg-[#1a1a1a] border border-[#27272a] text-center">
              <p className="text-xs text-[#71717a]">{item.label}</p>
              <p className="text-base font-bold text-[#22c55e] mt-0.5">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent sales */}
      {pendingSales > 0 && (
        <div className="p-5 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-green-500/20">
              <DollarSign className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {pendingSales} venta{pendingSales !== 1 ? 's' : ''} pendiente{pendingSales !== 1 ? 's' : ''} de pago
              </p>
              <p className="text-xs text-[#71717a]">
                {formatCurrency(pendingAmount)} en comisiones por cobrar
              </p>
            </div>
          </div>
        </div>
      )}

      {/* How it works */}
      <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a]">
        <h2 className="text-base font-semibold text-white mb-4">¿Cómo funciona?</h2>
        <div className="space-y-4">
          {[
            {
              step: '1',
              title: 'Comparte tu link',
              desc: 'Publica tu link personalizado en redes sociales, email o WhatsApp.',
            },
            {
              step: '2',
              title: 'Alguien compra el curso',
              desc: 'Cuando un usuario accede por tu link y compra, la venta queda registrada a tu código.',
            },
            {
              step: '3',
              title: 'Ganas tu comisión',
              desc: `Recibes el ${currentAffiliate.commissionRate}% por cada venta confirmada. Los pagos se procesan mensualmente.`,
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="w-7 h-7 rounded-full bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-xs font-bold text-violet-300 flex-shrink-0 mt-0.5">
                {item.step}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-[#71717a] mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
