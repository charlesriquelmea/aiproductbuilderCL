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
          <a href="#" className="flex items-center gap-2">
            {/* <span className="text-xl font-bold font-mono text-white" style={{ textShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}>
              Buskero
            </span> */}
          </a>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end gap-0.5">
              <CountdownTimer compact />
              <span className="text-[10px] text-[#71717a] font-mono">Cierran inscripciones el 24 de Mayo</span>
            </div>
            <a href="#aplicar">
              <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold px-5">
                <span className="text-black">Quiero ser AI Product Builder</span>
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
            <div className="px-4 py-4 flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <CountdownTimer compact />
                <span className="text-[10px] text-[#71717a] font-mono">Cierran inscripciones el 6 de Abril</span>
              </div>
              <a href="#aplicar" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold">
                  <span className="text-black">Quiero ser AI Product Builder</span>
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
