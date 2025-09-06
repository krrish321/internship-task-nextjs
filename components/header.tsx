"use client"

import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-rose-300 text-center py-2 px-4 text-sm text-white">
        30% off on all Items Only Limited Time Deal Offer ending in 03:54:15
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="text-xl font-bold text-gray-900">KS JEWELLERS</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-gray-600">Collections</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-gray-600">Categories</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
            <span className="text-gray-600 cursor-pointer">Hot Picks</span>
            <span className="text-gray-600 cursor-pointer">Gifts</span>
            <span className="text-gray-600 cursor-pointer">Shop All</span>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
             <Link href="/login">
    <Button 
      variant="outline" 
      className="bg-rose-200 text-rose-700 border-rose-300 hover:bg-rose-300"
    >
      LOGIN
    </Button>
  </Link>
             <Link href="/signup">
    <Button 
      variant="outline" 
      className="text-gray-600 border-gray-300 bg-transparent"
    >
      REGISTER
    </Button>
  </Link>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto mt-4 text-sm text-gray-500">
          <span>Home</span>
          <span className="mx-2">›</span>
          <span>Jewellery</span>
          <span className="mx-2">›</span>
          <span>Gifts</span>
          <span className="mx-2">›</span>
          <span>Necklace</span>
          <span className="mx-2">›</span>
          <span>Chains</span>
          <span className="mx-2">›</span>
          <span>Shining Diva...</span>
        </div>
      </header>
    </>
  )
}
