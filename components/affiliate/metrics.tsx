'use client'

import { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts'
import { MousePointerClick, TrendingUp, Activity } from 'lucide-react'
import { mockClicks, getClicksByDay, formatDate } from '@/lib/affiliate-data'

const SOURCES_COLOR: Record<string, string> = {
  instagram: '#e1306c',
  twitter: '#1da1f2',
  linkedin: '#0077b5',
  email: '#f59e0b',
  whatsapp: '#25d366',
  directo: '#7c3aed',
}

export default function AffiliateMetrics() {
  const [days, setDays] = useState<7 | 14 | 30>(14)

  const chartData = getClicksByDay(mockClicks, days)
  const totalClicks = mockClicks.length
  const converted = mockClicks.filter((c) => c.converted).length
  const convRate = totalClicks > 0 ? ((converted / totalClicks) * 100).toFixed(1) : '0'

  // Source breakdown
  const sourcesMap: Record<string, number> = {}
  mockClicks.forEach((c) => {
    sourcesMap[c.source] = (sourcesMap[c.source] || 0) + 1
  })
  const sourcesData = Object.entries(sourcesMap)
    .map(([source, count]) => ({ source, count }))
    .sort((a, b) => b.count - a.count)

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111111] border border-[#27272a] rounded-xl p-3 shadow-xl">
          <p className="text-xs text-[#71717a] mb-2">{label}</p>
          {payload.map((p: any) => (
            <p key={p.name} className="text-sm font-semibold" style={{ color: p.color }}>
              {p.name}: {p.value}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Métricas de Rendimiento</h1>
        <p className="text-[#71717a] mt-1">Analiza el comportamiento de tu link de referido.</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Clics', value: totalClicks, icon: MousePointerClick, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
          { label: 'Conversiones', value: converted, icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
          { label: 'Tasa Conversión', value: `${convRate}%`, icon: Activity, color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
        ].map((s) => {
          const Icon = s.icon
          return (
            <div key={s.label} className={`p-5 rounded-2xl border ${s.bg}`}>
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-4 h-4 ${s.color}`} />
                <p className="text-xs text-[#71717a]">{s.label}</p>
              </div>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          )
        })}
      </div>

      {/* Chart */}
      <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold text-white">Clics y Conversiones</h2>
          <div className="flex gap-1">
            {([7, 14, 30] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDays(d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  days === d
                    ? 'bg-violet-600 text-white'
                    : 'text-[#71717a] hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                {d}d
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="gradClicks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradConv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis dataKey="date" tick={{ fill: '#71717a', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#71717a', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="clics" name="Clics" stroke="#7c3aed" fill="url(#gradClicks)" strokeWidth={2} dot={false} />
            <Area type="monotone" dataKey="conversiones" name="Conversiones" stroke="#22c55e" fill="url(#gradConv)" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Sources breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a]">
          <h2 className="text-base font-semibold text-white mb-4">Por Fuente</h2>
          <div className="space-y-3">
            {sourcesData.map((s) => {
              const pct = Math.round((s.count / totalClicks) * 100)
              const color = SOURCES_COLOR[s.source] || '#71717a'
              return (
                <div key={s.source}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-white capitalize">{s.source}</span>
                    <span className="text-xs text-[#71717a]">{s.count} ({pct}%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#27272a] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, backgroundColor: color }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recent clicks table */}
        <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a]">
          <h2 className="text-base font-semibold text-white mb-4">Clics Recientes</h2>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {mockClicks.slice(0, 12).map((click) => (
              <div
                key={click.id}
                className="flex items-center justify-between py-2 border-b border-[#1a1a1a] last:border-0"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: SOURCES_COLOR[click.source] || '#71717a' }}
                  />
                  <span className="text-xs text-white capitalize">{click.source}</span>
                </div>
                <div className="flex items-center gap-3">
                  {click.converted && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                      conversión
                    </span>
                  )}
                  <span className="text-xs text-[#71717a]">
                    {new Date(click.timestamp).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
