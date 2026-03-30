'use client'

import { useState } from 'react'
import { 
  CreditCard, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Download, 
  Upload, 
  MoreVertical,
  Banknote,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  FileText,
  Mail
} from 'lucide-react'
import { mockPayouts, formatCurrency, formatDate } from '@/lib/affiliate-data'

export default function AdminPayoutManager() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'paid'>('all')

  const filteredPayouts = mockPayouts.filter(p => {
    const matchesSearch = p.affiliateName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = [
    { label: 'Pendientes', count: mockPayouts.filter(p => p.status === 'pending').length, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { label: 'Aprobados', count: mockPayouts.filter(p => p.status === 'approved').length, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Pagados (Mes)', count: mockPayouts.filter(p => p.status === 'paid').length, color: 'text-green-400', bg: 'bg-green-500/10' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Banknote className="w-6 h-6 text-green-400" />
            Gestión de Payouts
          </h1>
          <p className="text-[#71717a] mt-1">Aprobación de retiros y carga de comprobantes bancarios.</p>
        </div>
        <div className="flex items-center gap-2">
           <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1a1a1a] border border-[#27272a] text-xs font-bold text-white hover:bg-[#27272a] transition-colors">
             <Download className="w-3.5 h-3.5" />
             Exportar CSV
           </button>
           <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white text-xs font-bold transition-all shadow-lg shadow-green-600/20">
             <CheckCircle2 className="w-3.5 h-3.5" />
             Procesar Lote
           </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="p-4 rounded-xl bg-[#111111] border border-[#27272a] flex items-center justify-between">
            <div>
              <p className="text-[10px] text-[#71717a] font-bold uppercase tracking-wider">{s.label}</p>
              <p className={`text-xl font-bold ${s.color}`}>{s.count}</p>
            </div>
            <div className={`p-2 rounded-lg ${s.bg} ${s.color}`}>
              {s.label === 'Pendientes' ? <Clock className="w-4 h-4" /> : s.label === 'Aprobados' ? <CheckCircle2 className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
            </div>
          </div>
        ))}
      </div>

      {/* Filtros */}
      <div className="p-4 rounded-xl bg-[#111111] border border-[#27272a] flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a]" />
          <input 
            type="text" 
            placeholder="Buscar por afiliado o ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#1a1a1a] border border-[#27272a] rounded-xl text-sm text-white focus:outline-none focus:border-green-500/50 transition-colors"
          />
        </div>
        <div className="flex items-center gap-1 bg-[#1a1a1a] border border-[#27272a] p-1 rounded-xl">
           {(['all', 'pending', 'approved', 'paid'] as const).map((s) => (
             <button
               key={s}
               onClick={() => setStatusFilter(s)}
               className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                 statusFilter === s 
                   ? 'bg-green-600 text-white shadow-lg' 
                   : 'text-[#71717a] hover:text-white'
               }`}
             >
               {s === 'all' ? 'Ver Todos' : s}
             </button>
           ))}
        </div>
      </div>

      {/* Tabla de Payouts */}
      <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#27272a]">
                <th className="pb-4 text-[10px] font-bold text-[#71717a] uppercase tracking-wider">Afiliado / ID</th>
                <th className="pb-4 text-[10px] font-bold text-[#71717a] uppercase tracking-wider">Monto</th>
                <th className="pb-4 text-[10px] font-bold text-[#71717a] uppercase tracking-wider">Requested</th>
                <th className="pb-4 text-[10px] font-bold text-[#71717a] uppercase tracking-wider">Banco Destino</th>
                <th className="pb-4 text-[10px] font-bold text-[#71717a] uppercase tracking-wider">Estado</th>
                <th className="pb-4 text-[10px] font-bold text-[#71717a] uppercase tracking-wider text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a1a1a]">
              {filteredPayouts.map((payout) => (
                <tr key={payout.id} className="group hover:bg-[#1a1a1a]/30 transition-colors">
                  <td className="py-4">
                    <p className="text-sm font-semibold text-white">{payout.affiliateName}</p>
                    <p className="text-[10px] font-mono text-[#71717a]">{payout.id}</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm font-bold text-green-400">{formatCurrency(payout.amount)}</p>
                  </td>
                  <td className="py-4">
                    <p className="text-xs text-white">{formatDate(payout.requestedAt)}</p>
                  </td>
                  <td className="py-4">
                    {payout.bankData ? (
                      <div>
                        <p className="text-xs text-white">{payout.bankData.bank}</p>
                        <p className="text-[10px] text-[#71717a]">{payout.bankData.accountNumber}</p>
                      </div>
                    ) : (
                      <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 uppercase">
                        <AlertCircle className="w-3 h-3" /> Faltan Datos
                      </span>
                    )}
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                      payout.status === 'paid' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : payout.status === 'approved'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                    }`}>
                      {payout.status === 'paid' ? 'Pagado' : payout.status === 'approved' ? 'Aprobado' : 'Pendiente'}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                       {payout.status === 'pending' && (
                         <button className="p-2 rounded-lg bg-green-600/10 border border-green-500/20 text-green-400 hover:bg-green-600 hover:text-white transition-all">
                           <CheckCircle2 className="w-4 h-4" />
                         </button>
                       )}
                       {payout.status === 'approved' && (
                         <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-green-500/50 text-xs text-green-400 hover:bg-green-600 hover:text-white transition-all group/btn">
                           <Upload className="w-3.5 h-3.5" />
                           <span className="font-bold">Subir Comprobante</span>
                         </button>
                       )}
                       {payout.status === 'paid' && (
                         <button className="p-2 rounded-lg bg-[#1a1a1a] border border-[#27272a] text-[#71717a] hover:text-white transition-colors">
                           <FileText className="w-4 h-4" />
                         </button>
                       )}
                       <button className="p-2 rounded-lg bg-[#1a1a1a] border border-[#27272a] text-[#71717a] hover:text-red-400 transition-colors">
                         <MoreVertical className="w-4 h-4" />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Warning */}
      <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 flex gap-3">
        <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-[#71717a] leading-relaxed">
           <span className="text-yellow-500 font-bold">Recordatorio:</span> Los pagos aprobados deben realizarse vía transferencia bancaria manual. Una vez realizada la transferencia, suba el comprobante (PDF/JPG) para que el afiliado sea notificado y pueda descargarlo desde su portal.
        </p>
      </div>
    </div>
  )
}
