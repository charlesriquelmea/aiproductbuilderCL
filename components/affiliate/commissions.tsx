'use client'

import { useState } from 'react'
import { 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Download,
  AlertCircle,
  Calculator
} from 'lucide-react'
import { 
  mockSales, 
  mockPayouts, 
  formatCurrency, 
  formatDate,
  currentAffiliate
} from '@/lib/affiliate-data'
import CommissionCalculator from './commission-calculator'

export default function AffiliateCommissions() {
  const [showCalculator, setShowCalculator] = useState(false)

  // Filtrar ventas del afiliado actual (mock)
  const sales = mockSales.filter(s => s.affiliateCode === currentAffiliate.code)
  const payouts = mockPayouts.filter(p => p.affiliateId === currentAffiliate.id)

  const pendingAmount = sales
    .filter(s => s.status === 'pending' || s.status === 'completed')
    .reduce((sum, s) => sum + s.commission, 0)
    
  const paidAmount = payouts
    .filter(p => p.status === 'paid')
    .reduce((sum, p) => sum + p.amount, 0)

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Comisiones y Pagos</h1>
          <p className="text-[#71717a] mt-1">Historial de ventas y solicitudes de retiro.</p>
        </div>
        <button 
          onClick={() => setShowCalculator(!showCalculator)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1a1a1a] border border-[#27272a] text-sm font-medium text-white hover:bg-[#27272a] transition-colors"
        >
          <Calculator className="w-4 h-4 text-violet-400" />
          {showCalculator ? 'Ocultar Calculadora' : 'Calculadora de Ganancias'}
        </button>
      </div>

      {showCalculator && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          <CommissionCalculator />
        </div>
      )}

      {/* Resumen de Comisiones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a] flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
            <Clock className="w-6 h-6 text-violet-400" />
          </div>
          <div>
            <p className="text-xs text-[#71717a] font-medium uppercase tracking-wider">Por Cobrar</p>
            <p className="text-2xl font-bold text-white">{formatCurrency(currentAffiliate.pendingPayout)}</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a] flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <p className="text-xs text-[#71717a] font-medium uppercase tracking-wider">Pagado Histórico</p>
            <p className="text-2xl font-bold text-white">{formatCurrency(paidAmount)}</p>
          </div>
        </div>
      </div>

      {/* Tabla de Ventas Recientes */}
      <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a]">
        <h2 className="text-base font-semibold text-white mb-6 flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-violet-400" />
          Ventas Recientes
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#27272a]">
                <th className="pb-4 text-xs font-semibold text-[#71717a] uppercase tracking-wider">Fecha</th>
                <th className="pb-4 text-xs font-semibold text-[#71717a] uppercase tracking-wider">Producto</th>
                <th className="pb-4 text-xs font-semibold text-[#71717a] uppercase tracking-wider">Monto</th>
                <th className="pb-4 text-xs font-semibold text-[#71717a] uppercase tracking-wider">Comisión</th>
                <th className="pb-4 text-xs font-semibold text-[#71717a] uppercase tracking-wider">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a1a1a]">
              {sales.map((sale) => (
                <tr key={sale.id} className="group hover:bg-[#1a1a1a]/30 transition-colors">
                  <td className="py-4 text-sm text-white">{formatDate(sale.timestamp)}</td>
                  <td className="py-4 text-sm text-white font-medium">{sale.courseName}</td>
                  <td className="py-4 text-sm text-[#71717a]">{formatCurrency(sale.amount)}</td>
                  <td className="py-4 text-sm text-[#22c55e] font-bold">{formatCurrency(sale.commission)}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                      sale.status === 'completed' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                    }`}>
                      {sale.status === 'completed' ? 'Confirmado' : 'Pendiente'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Historial de Pagos (Payouts) */}
      <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272a]">
        <h2 className="text-base font-semibold text-white mb-6 flex items-center gap-2">
          <FileText className="w-4 h-4 text-violet-400" />
          Retiros y Facturación
        </h2>
        
        {payouts.length === 0 ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6 text-[#71717a]" />
            </div>
            <p className="text-sm text-[#71717a]">Aún no tienes solicitudes de retiro procesadas.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {payouts.map((payout) => (
              <div 
                key={payout.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-[#1a1a1a] border border-[#27272a] gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    payout.status === 'paid' ? 'bg-green-500/10' : 'bg-yellow-500/10'
                  }`}>
                    <DollarSign className={`w-5 h-5 ${payout.status === 'paid' ? 'text-green-400' : 'text-yellow-500'}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{formatCurrency(payout.amount)}</p>
                    <p className="text-xs text-[#71717a]">{formatDate(payout.requestedAt)}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                    payout.status === 'paid' 
                      ? 'bg-green-500/10 text-green-400'
                      : payout.status === 'approved'
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {payout.status === 'paid' ? 'Pagado' : payout.status === 'approved' ? 'Aprobado' : 'Pendiente'}
                  </span>
                  
                  {payout.status === 'paid' && payout.proofUrl && (
                    <button className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors">
                      <Download className="w-3.5 h-3.5" />
                      Comprobante
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Info de pagos */}
      <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
          <p className="text-xs text-[#71717a] leading-relaxed">
            <span className="text-violet-300 font-semibold block mb-1">Nota sobre Pagos:</span>
            Los cortes se realizan el último día de cada mes. Las comisiones se pagan entre el 1 y el 5 del mes siguiente a todos los afiliados con un acumulado superior a $100 USD y que tengan sus <span className="text-white">datos bancarios actualizados</span>.
          </p>
        </div>
      </div>
    </div>
  )
}
