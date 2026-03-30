'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function RefTrackerInner() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const ref = searchParams.get('ref')
    if (ref) {
      localStorage.setItem('affiliate_ref', ref)
      localStorage.setItem('affiliate_ref_ts', Date.now().toString())
      console.log(`[RefTracker] Referral code saved: ${ref}`)
    }
  }, [searchParams])

  return null
}

export default function RefTracker() {
  return (
    <Suspense fallback={null}>
      <RefTrackerInner />
    </Suspense>
  )
}
