'use client'

import { useState, useEffect } from 'react'
import AdminSidebar from '@/components/admin/admin-sidebar'
import AdminGlobalMetrics from '@/components/admin/global-metrics'
import AffiliateTable from '@/components/admin/affiliate-table'
import AdminPayoutManager from '@/components/admin/payout-manager'
import AdminCommissionConfig from '@/components/admin/commission-config'
import { Bell, Search, ShieldCheck, Zap } from 'lucide-react'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('metricas')
  const [mounted, setMounted] = useState(false)

  // Prevenir hidratación incorrecta
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const renderContent = () => {
    switch (activeTab) {
      case 'metricas':
        return <AdminGlobalMetrics />
      case 'afiliados':
        return <AffiliateTable />
      case 'payouts':
        return <AdminPayoutManager />
      case 'configuracion':
        return <AdminCommissionConfig />
      default:
        return <AdminGlobalMetrics />
    }
  }

  return (
    <>
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 lg:ml-72 min-h-screen">
        {/* Admin Header */}
        <header className="h-16 border-b border-[#27272a] bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-30 px-6 sm:px-10 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-600/10 border border-green-500/20">
               <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
               <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest leading-none">Security High</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111111] border border-[#27272a]">
               <Zap className="w-3.5 h-3.5 text-[#71717a]" />
               <span className="text-[10px] font-bold text-[#71717a] uppercase">Sistema Activo</span>
            </div>
            
            <button className="relative p-2 rounded-xl bg-[#111111] border border-[#27272a] text-[#71717a] hover:text-white transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-500 rounded-full border border-[#0a0a0a]" />
            </button>
            <div className="w-px h-6 bg-[#27272a]" />
            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-semibold text-white">Administrator</p>
                <p className="text-[10px] text-green-400 font-mono">ROOT_LEVEL</p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-green-900 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-green-900/20">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Admin Content Area */}
        <div className="p-6 sm:p-10 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-3 duration-500">
          {renderContent()}
        </div>

        {/* Footer Admin */}
        <footer className="mt-20 border-t border-[#27272a] py-8 px-6 sm:px-10 flex flex-col sm:row items-center justify-between gap-4 text-[#71717a]">
          <p className="text-[10px] uppercase font-bold tracking-widest">© 2026 Protolylat Internal Control System</p>
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-wider">
            <button className="hover:text-green-400 transition-colors">Master Config</button>
            <button className="hover:text-green-400 transition-colors">System Logs</button>
            <button className="hover:text-green-400 transition-colors">API Keys</button>
          </div>
        </footer>
      </main>
    </>
  )
}
