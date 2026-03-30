'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  LayoutDashboard,
  BarChart3,
  DollarSign,
  CreditCard,
  Menu,
  X,
  Zap,
  Copy,
  LogOut,
} from 'lucide-react'
import { currentAffiliate, BASE_URL } from '@/lib/affiliate-data'

const navItems = [
  { id: 'inicio', label: 'Inicio', icon: LayoutDashboard },
  { id: 'metricas', label: 'Métricas', icon: BarChart3 },
  { id: 'comisiones', label: 'Comisiones', icon: DollarSign },
  { id: 'datos-bancarios', label: 'Datos Bancarios', icon: CreditCard },
]

interface AffiliateSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function AffiliateSidebar({ activeTab, onTabChange }: AffiliateSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const affiliateLink = `${BASE_URL}?ref=${currentAffiliate.code}`

  const handleCopy = () => {
    navigator.clipboard.writeText(affiliateLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-[#27272a]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">Portal Afiliado</p>
            <p className="text-xs text-[#71717a]">Protolylat</p>
          </div>
        </div>
      </div>

      {/* User info */}
      <div className="p-4 mx-3 mt-4 rounded-xl bg-[#1a1a1a] border border-[#27272a]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
            {currentAffiliate.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white truncate">{currentAffiliate.name}</p>
            <p className="text-xs text-[#22c55e] font-mono">{currentAffiliate.code}</p>
          </div>
        </div>
        {/* Quick copy */}
        <button
          onClick={handleCopy}
          className="mt-3 flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-[#111111] border border-[#27272a] hover:border-violet-500/50 transition-colors group"
        >
          <Copy className="w-3.5 h-3.5 text-[#71717a] group-hover:text-violet-400 transition-colors flex-shrink-0" />
          <span className="text-xs text-[#71717a] truncate font-mono">
            {copied ? '¡Copiado!' : `?ref=${currentAffiliate.code}`}
          </span>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 mt-2 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          return (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id)
                setMobileOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                  : 'text-[#71717a] hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-violet-400' : ''}`} />
              {item.label}
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400" />
              )}
            </button>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-[#27272a]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[#71717a]">Comisión</p>
            <p className="text-lg font-bold text-[#22c55e]">{currentAffiliate.commissionRate}%</p>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-[#71717a] hover:text-white hover:bg-[#1a1a1a] transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Salir
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 rounded-lg bg-[#111111] border border-[#27272a] flex items-center justify-center"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0a0a0a] border-r border-[#27272a] transform transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-72 bg-[#0a0a0a] border-r border-[#27272a] fixed inset-y-0 left-0">
        <SidebarContent />
      </aside>
    </>
  )
}
