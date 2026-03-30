'use client'

import { useState, useEffect } from 'react'
import AffiliateSidebar from '@/components/affiliate/sidebar'
import AffiliateHome from '@/components/affiliate/home'
import AffiliateMetrics from '@/components/affiliate/metrics'
import AffiliateCommissions from '@/components/affiliate/commissions'
import AffiliateBankData from '@/components/affiliate/bankData'
import { Bell, Search, User } from 'lucide-react'

export default function AffiliatePage() {
  const [activeTab, setActiveTab] = useState('inicio')
  const [mounted, setMounted] = useState(false)

  // Prevenir hidratación incorrecta
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return <AffiliateHome />
      case 'metricas':
        return <AffiliateMetrics />
      case 'comisiones':
        return <AffiliateCommissions />
      case 'datos-bancarios':
        return <AffiliateBankData />
      default:
        return <AffiliateHome />
    }
  }

return (
  <div className="flex min-h-screen">
    <AffiliateSidebar activeTab={activeTab} onTabChange={setActiveTab} />

    <main className="flex-1 lg:ml-72 min-h-screen min-w-0">
      <header className="h-16 border-b border-[#27272a] bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-30 px-4 sm:px-6 lg:px-10 flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="relative max-w-md w-full hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a]" />
            <input
              type="text"
              placeholder="Buscar en el portal..."
              className="w-full pl-10 pr-4 py-2 bg-[#111111] border border-[#27272a] rounded-xl text-xs text-white focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="relative p-2 rounded-xl bg-[#111111] border border-[#27272a] text-[#71717a] hover:text-white transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-violet-500 rounded-full border border-[#0a0a0a]" />
          </button>
          <div className="w-px h-6 bg-[#27272a]" />
          <div className="flex items-center gap-2">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-semibold text-white">Carlos Mendoza</p>
              <p className="text-[10px] text-[#71717a]">Afiliado Premium</p>
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
              CM
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 sm:p-6 lg:p-10 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-3 duration-500">
        {renderContent()}
      </div>

      <footer className="mt-20 border-t border-[#27272a] py-8 px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#71717a]">
        <p className="text-xs">© 2026 AI Product Builder — Portal de Afiliados</p>
        <div className="flex items-center gap-6 text-xs underline underline-offset-4">
          <button className="hover:text-white transition-colors">Soporte</button>
          <button className="hover:text-white transition-colors">Términos y Condiciones</button>
          <button className="hover:text-white transition-colors">Privacidad</button>
        </div>
      </footer>
    </main>
  </div>
)
}
