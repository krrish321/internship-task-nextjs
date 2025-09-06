"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { ProductDetail } from "@/components/product-detail"
import { CustomerReviews } from "@/components/customer-reviews"
import { ProductRecommendations } from "@/components/product-recommendations"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setIsMobileNavOpen(true)} />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

      <main>
        <ProductDetail />
        <CustomerReviews />
        <ProductRecommendations />
      </main>

      <Footer />
    </div>
  )
}
