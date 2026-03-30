"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-[#27272a]/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-gradient-to-br from-violet to-violet-800 flex items-center justify-center shadow-lg shadow-violet/20">
                <span className="text-white font-bold text-lg leading-none">P</span>
              </div>
              <span className="hidden sm:block text-sm font-bold text-white tracking-tight">Protolylat</span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <a href="/courses" className="text-xs font-bold text-[#71717a] hover:text-white uppercase tracking-widest transition-colors">Cursos</a>
              <a href="/afiliado" className="text-xs font-bold text-[#71717a] hover:text-white uppercase tracking-widest transition-colors">Afiliados</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-right">
            <div className="flex flex-col items-end gap-0.5">
              <CountdownTimer compact />
              <span className="text-[10px] text-[#71717a] font-mono leading-none">Cierra 24 May</span>
            </div>
            <a href="/courses">
              <Button size="sm" className="bg-neon-green hover:bg-[#16a34a] text-black font-bold h-9 px-5">
                <span className="text-black">Explorar</span>
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-[#27272a]/50"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <CountdownTimer compact />
                <span className="text-[10px] text-[#71717a] font-mono leading-none">Cierra el 24 de Mayo</span>
              </div>

              <div className="flex flex-col gap-4 py-4 border-y border-[#27272a]/50">
                <a href="/courses" className="text-sm font-bold text-white uppercase tracking-widest" onClick={() => setMobileOpen(false)}>Cursos</a>
                <a href="/afiliado" className="text-sm font-bold text-white uppercase tracking-widest" onClick={() => setMobileOpen(false)}>Afiliados</a>
              </div>

              <a href="/courses" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold py-6">
                  <span className="text-black">Explorar Cursos</span>
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
