'use client'

import { useState } from 'react'
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  Settings2, 
  ExternalLink,
  PlusCircle,
  Mail,
  ShieldCheck,
  ShieldAlert,
  ArrowUpRight,
  TrendingUp,
  MousePointerClick
} from 'lucide-react'
import { mockAffiliates, formatCurrency, formatDate, COURSE_PRICE } from '@/lib/affiliate-data'
import CreateAffiliateModal from './create-affiliate'

export default function AffiliateTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showCreateModal, setShowCreateModal] = useState(false)

  const filteredAffiliates = mockAffiliates.filter(a => 
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Users className="w-6 h-6 text-green-400" />
            Gestión de Afiliados
          </h1>
          <p className="text-[#71717a] mt-1">Lista completa de socios y sus métricas de rendimiento.</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white text-sm font-bold transition-all shadow-lg shadow-green-600/20"
        >
          <PlusCircle className="w-4 h-4" />
          Crear Afiliado
        </button>
      </div>

      {/* Filtros y Búsqueda */}
      <div className="p-4 rounded-xl bg-[#111111] border border-[#27272a] flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a]" />
          <input 
            type="text" 
            placeholder="Buscar por nombre, código o email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#1a1a1a] border border-[#27272a] rounded-xl text-sm text-white focus:outline-none focus:border-green-500/50 transition-colors"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1a1a1a] border border-[#27272a] text-[#71717a] hover:text-white transition-colors text-sm font-medium">
          <Filter className="w-4 h-4" />
          Filtros
        </button>
      </div>

      {/* Tabla */}
      <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#27272a]">
                <th className="pb-4 text-[10px] font-bold text-[#71717a] uppercase tracking-wider">Afiliado</th>
                <th className="pb-4 text-[10px] font-bold text-[#71717a] uppercase tracking-wider">Código / Com%</th>
                <th className="pb-4 text-[10px] font-bold text-[#71717a] uppercase tracking-wider">Clics / Ventas</th>
                <th className="pb-4 text-[10px] font-bold text-[#71717a] uppercase tracking-wider">Total Ganado</th>
                <th className="pb-4 text-[10px] font-bold text-[#71717a] uppercase tracking-wider">Estado</th>
                <th className="pb-4 text-[10px] font-bold text-[#71717a] uppercase tracking-wider text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a1a1a]">
              {filteredAffiliates.map((aff) => (
                <tr key={aff.id} className="group hover:bg-[#1a1a1a]/30 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20 flex items-center justify-center text-xs font-bold text-green-400">
                        {aff.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{aff.name}</p>
                        <p className="text-[10px] text-[#71717a] flex items-center gap-1">
                          <Mail className="w-2.5 h-2.5" />
                          {aff.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-xs font-mono text-white tracking-widest">{aff.code}</p>
                    <p className="text-[10px] text-green-400 font-bold uppercase">{aff.commissionRate}% de Comisión</p>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                       <div className="flex items-center gap-1.5">
                         <MousePointerClick className="w-3 h-3 text-[#71717a]" />
                         <span className="text-xs text-white">{aff.totalClicks}</span>
                       </div>
                       <div className="flex items-center gap-1.5">
                         <TrendingUp className="w-3 h-3 text-[#71717a]" />
                         <span className="text-xs text-white underline underline-offset-2">{aff.totalSales}</span>
                       </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-sm font-bold text-white tracking-tight">{formatCurrency(aff.totalEarned)}</p>
                    <p className="text-[10px] text-[#22c55e]">Pendiente: {formatCurrency(aff.pendingPayout)}</p>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                      aff.status === 'active' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : aff.status === 'pending'
                        ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                        : 'bg-red-500/10 text-red-500 border border-red-500/20'
                    }`}>
                      {aff.status === 'active' ? 'Activo' : aff.status === 'pending' ? 'Pendiente' : 'Suspendido'}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-2 rounded-lg bg-[#1a1a1a] border border-[#27272a] text-[#71717a] hover:text-white hover:border-green-500/50 transition-colors">
                         <Settings2 className="w-4 h-4" />
                       </button>
                       <button className="p-2 rounded-lg bg-[#1a1a1a] border border-[#27272a] text-[#71717a] hover:text-white transition-colors">
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

      {/* Info Legend */}
      <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10 flex gap-4">
        <ShieldCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
        <p className="text-xs text-[#71717a] leading-relaxed">
           <span className="text-white font-bold block mb-1 uppercase tracking-wider">Gestión Proactiva</span>
           Los afiliados marcados como "Suspenido" no pueden generar nuevas ventas pero mantienen su portal activo para retiro de comisiones históricas. Al "Crear Afiliado", se genera un email automático con sus credenciales de acceso (Simulado).
        </p>
      </div>

      {showCreateModal && (
        <CreateAffiliateModal 
          isOpen={showCreateModal} 
          onClose={() => setShowCreateModal(false)} 
        />
      )}
    </div>
  )
}
