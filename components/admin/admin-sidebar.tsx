'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  Menu,
  X,
  Zap,
  LogOut,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

const navItems = [
  { id: 'metricas', label: 'Métricas Globales', icon: TrendingUp },
  { id: 'afiliados', label: 'Gestión Afiliados', icon: Users },
  { id: 'payouts', label: 'Pagos y Payouts', icon: CreditCard },
  { id: 'configuracion', label: 'Configuración', icon: Settings },
]

interface AdminSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#0a0a0a]">
      {/* Logo */}
      <div className="p-6 border-b border-[#27272a]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-900/20">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">Admin Panel</p>
            <p className="text-[10px] text-green-400 font-mono uppercase tracking-widest">Affiliates System</p>
          </div>
        </div>
      </div>

      {/* Admin Info */}
      <div className="p-4 mx-3 mt-4 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#27272a]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#27272a] border border-[#3f3f46] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
            AD
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white truncate">Protolylat Admin</p>
            <p className="text-[10px] text-[#71717a]">Root Access</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 mt-4 space-y-1">
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
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                isActive
                  ? 'bg-green-600/10 text-green-400 border border-green-500/20'
                  : 'text-[#71717a] hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 transition-colors ${isActive ? 'text-green-400' : 'group-hover:text-white'}`} />
              {item.label}
              {isActive && (
                <div className="ml-auto w-1 h-3 rounded-full bg-green-400" />
              )}
            </button>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-[#27272a]">
        <Link
          href="/"
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-[#71717a] hover:text-white hover:bg-red-500/10 hover:text-red-400 transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
          Salir al Sitio
        </Link>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 rounded-lg bg-[#111111] border border-[#27272a] flex items-center justify-center shadow-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 lg:hidden ease-in-out ${
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
