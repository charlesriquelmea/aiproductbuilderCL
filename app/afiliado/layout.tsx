'use client'

import { useState } from 'react'
import AffiliateSidebar from '@/components/affiliate/sidebar'

export default function AffiliateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [activeTab, setActiveTab] = useState('inicio')

  // Nota: En una app real, el layout manejaría la navegación. 
  // Para este prototipo, el estado del tab se pasa a través del children si es necesario, 
  // o simplemente dejamos que el Page principal lo maneje.
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* El sidebar se renderiza aquí para que sea persistente */}
      {/* Pasaremos el estado al Page vía un context o simplemente lo manejaremos en Page.tsx */}
      {children}
    </div>
  )
}
