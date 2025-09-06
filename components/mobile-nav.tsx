"use client"

import { Button } from "@/components/ui/button"
import { X, Plus, TrendingDown, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose} />}

      {/* Slide Navigation */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-80 bg-rose-300 z-50 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-6 text-white">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 text-white hover:bg-rose-400"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Navigation Items */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center space-x-3 py-3 border-b border-white/30">
              <Plus className="h-5 w-5" />
              <span className="text-lg">Add Account</span>
            </div>

            <div className="flex items-center space-x-3 py-3 border-b border-white/30">
              <TrendingDown className="h-5 w-5" />
              <span className="text-lg">Gold jewellery</span>
            </div>

            <div className="flex items-center space-x-3 py-3 border-b border-white/30">
              <TrendingDown className="h-5 w-5" />
              <span className="text-lg">Silver Jewellery</span>
            </div>

            <div className="flex items-center space-x-3 py-3 border-b border-white/30">
              <TrendingDown className="h-5 w-5" />
              <span className="text-lg">Trending Collection</span>
            </div>

            <div className="flex items-center space-x-3 py-3 border-b border-white/30">
              <TrendingDown className="h-5 w-5" />
              <span className="text-lg">Gifts</span>
            </div>

            <div className="flex items-center space-x-3 py-3 border-b border-white/30">
              <TrendingDown className="h-5 w-5" />
              <span className="text-lg">Shop by Occasion</span>
            </div>

            {/* Login Button */}
            <div className="mt-8">
              <Button className="w-full bg-white text-gray-800 hover:bg-gray-100 py-3 text-lg">
                <User className="h-5 w-5 mr-2" />
                Login / SignUp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
