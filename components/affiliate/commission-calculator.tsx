'use client'

import { useState } from 'react'
import { Plus, Minus, DollarSign, Calculator, TrendingUp } from 'lucide-react'
import { COURSE_PRICE, currentAffiliate, formatCurrency } from '@/lib/affiliate-data'

export default function CommissionCalculator() {
  const [salesCount, setSalesCount] = useState(5)
  const commissionRate = currentAffiliate.commissionRate

  const totalSaleAmount = salesCount * COURSE_PRICE
  const totalCommission = totalSaleAmount * (commissionRate / 100)

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-900/10 to-violet-600/5 border border-violet-500/20 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-violet-600/20 border border-violet-500/30">
          <Calculator className="w-5 h-5 text-violet-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Calculadora de Proyección</h3>
          <p className="text-xs text-[#71717a]">Calcula tus ganancias basadas en objetivos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Control */}
        <div className="space-y-4">
          <label className="text-sm font-medium text-[#71717a] block">
            Ventas estimadas por mes
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSalesCount(Math.max(1, salesCount - 1))}
              className="w-12 h-12 rounded-xl bg-[#111111] border border-[#27272a] flex items-center justify-center text-white hover:border-violet-500 transition-colors"
            >
              <Minus className="w-5 h-5" />
            </button>
            <div className="flex-1 text-center">
              <span className="text-4xl font-bold text-white leading-none">{salesCount}</span>
              <p className="text-xs text-[#71717a] mt-1 font-medium uppercase tracking-tight">Estudiantes</p>
            </div>
            <button
              onClick={() => setSalesCount(salesCount + 1)}
              className="w-12 h-12 rounded-xl bg-[#111111] border border-[#27272a] flex items-center justify-center text-white hover:border-violet-500 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          
          <input 
            type="range" 
            min="1" 
            max="100" 
            value={salesCount} 
            onChange={(e) => setSalesCount(parseInt(e.target.value))}
            className="w-full h-1.5 bg-[#27272a] rounded-lg appearance-none cursor-pointer accent-violet-600"
          />
        </div>

        {/* Resultados */}
        <div className="grid grid-cols-1 gap-3">
          <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#27272a]">
            <p className="text-[10px] text-[#71717a] font-bold uppercase mb-1">Monto Total Vendido</p>
            <p className="text-xl font-bold text-white opacity-60 italic">{formatCurrency(totalSaleAmount)} USD</p>
          </div>
          <div className="p-4 rounded-xl bg-[#111111]/80 border border-violet-500/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10 scale-150 rotate-12 group-hover:scale-125 transition-transform">
              <TrendingUp className="w-12 h-12 text-green-400" />
            </div>
            <p className="text-[10px] text-[#22c55e] font-bold uppercase mb-1">Tu Comisión Estimada ({commissionRate}%)</p>
            <p className="text-3xl font-bold text-[#22c55e]">{formatCurrency(totalCommission)}</p>
            <p className="text-[10px] text-[#71717a] mt-1">Estimación basada en el precio de {formatCurrency(COURSE_PRICE)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
