'use client'

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend
} from 'recharts'
import { 
  MousePointerClick, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Activity,
  ArrowUpRight,
  ShieldCheck,
  Zap
} from 'lucide-react'
import { getGlobalMetrics, formatCurrency, getClicksByDay, mockClicks } from '@/lib/affiliate-data'

export default function AdminGlobalMetrics() {
  const metrics = getGlobalMetrics()
  const chartData = getClicksByDay(mockClicks, 30) // Últimos 30 días

  const stats = [
    { 
      label: 'Clics Totales', 
      value: metrics.totalClicks.toLocaleString(), 
      icon: MousePointerClick, 
      color: 'text-blue-400', 
      bg: 'bg-blue-500/10' 
    },
    { 
      label: 'Ventas Totales', 
      value: metrics.totalSales.toLocaleString(), 
      icon: TrendingUp, 
      color: 'text-green-400', 
      bg: 'bg-green-500/10' 
    },
    { 
      label: 'Conversion Rate', 
      value: `${metrics.conversionRate}%`, 
      icon: Activity, 
      color: 'text-violet-400', 
      bg: 'bg-violet-500/10' 
    },
    { 
      label: 'Afiliados Activos', 
      value: metrics.activeAffiliates, 
      icon: Users, 
      color: 'text-yellow-400', 
      bg: 'bg-yellow-500/10' 
    },
  ]

  const payoutStats = [
    { label: 'Comisiones Pagadas', value: formatCurrency(metrics.totalCommissionsPaid), icon: ShieldCheck, color: 'text-green-400' },
    { label: 'Comisiones Pendientes', value: formatCurrency(metrics.totalCommissionsPending), icon: Clock, color: 'text-yellow-500' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
          <Zap className="w-6 h-6 text-green-400" />
          Dashboard Global
        </h1>
        <p className="text-[#71717a] mt-1">Métricas de rendimiento de toda la red de afiliados.</p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 rounded-2xl bg-[#111111] border border-[#27272a] group hover:border-green-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#27272a] group-hover:text-green-500/50" />
            </div>
            <p className="text-xs text-[#71717a] font-medium mb-1 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Payout Summary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 flex items-center gap-4">
          <div className="p-3 rounded-full bg-green-500/20 text-green-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-[#71717a] font-medium uppercase">Total Pagado</p>
            <p className="text-2xl font-bold text-white">{formatCurrency(metrics.totalCommissionsPaid)}</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 flex items-center gap-4">
          <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-500">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-[#71717a] font-medium uppercase">Pendiente de Pago</p>
            <p className="text-2xl font-bold text-white">{formatCurrency(metrics.totalCommissionsPending)}</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-2xl bg-[#111111] border border-[#27272a]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-base font-semibold text-white">Rendimiento de Clics (30d)</h2>
            <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-[#71717a]">
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500" /> Clics</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-violet-400" /> Conv</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 10 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 10 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #27272a', borderRadius: '12px' }}
                itemStyle={{ fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="clics" name="Clics" stroke="#22c55e" fillOpacity={1} fill="url(#colorGreen)" strokeWidth={3} />
              <Area type="monotone" dataKey="conversiones" name="Conv" stroke="#7c3aed" fillOpacity={0} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a]">
          <h2 className="text-base font-semibold text-white mb-6">Comisiones por Mes</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={[
              { month: 'Ene', amount: 1240 },
              { month: 'Feb', amount: 3500 },
              { month: 'Mar', amount: 6800 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 10 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 10 }} />
              <Tooltip 
                 contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #27272a', borderRadius: '12px' }}
                 itemStyle={{ fontSize: '12px' }}
              />
              <Bar dataKey="amount" name="Moto (USD)" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

function Clock(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
