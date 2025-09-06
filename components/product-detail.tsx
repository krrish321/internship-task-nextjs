"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, ChevronLeft, ChevronRight, Shield, Award, Clock } from "lucide-react"

export function ProductDetail() {
  const [currentImage, setCurrentImage] = useState(0)
  const [pincode, setPincode] = useState("")

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
       {/* Product Images */}
<div className="space-y-4">
  <div className="relative bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
    <img
      src="/screenshot (233).png"
      alt="Product"
      className="w-150 h-150 object-contain rounded"
    />

    {/* Left Button */}
    <Button 
      variant="ghost" 
      size="sm" 
      className="absolute left-2 top-1/2 transform -translate-y-1/2"
    >
      <ChevronLeft className="h-5 w-5" />
    </Button>

    {/* Right Button */}
    <Button 
      variant="ghost" 
      size="sm" 
      className="absolute right-2 top-1/2 transform -translate-y-1/2"
    >
      <ChevronRight className="h-5 w-5" />
    </Button>
  </div>
</div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Gold-Plated Pearls Necklace</h1>
            <p className="text-lg text-gray-600 mb-4">Made with 925 Silver</p>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 text-white px-2 py-1 rounded text-sm flex items-center">
                <span>4.1</span>
                <Star className="h-3 w-3 ml-1 fill-current" />
              </div>
              <span className="text-gray-600">(23)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">₹ 1,600</span>
              <span className="text-lg text-gray-500 line-through">₹ 2,000</span>
              <span className="text-green-600 font-semibold">(20% off)</span>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Easy 30 Day Return</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">925 Silver Plating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">6+ Month Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Premium Gold</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-6">
            <Button variant="outline" className="flex-1 py-3 bg-transparent">
              ADD TO CART
            </Button>
            <Button className="flex-1 py-3 bg-rose-300 hover:bg-rose-400 text-white">BUY NOW</Button>
          </div>

          {/* Delivery */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Estimated Delivery Time</h3>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="flex-1"
              />
              <Button variant="outline" className="text-rose-600 border-rose-300 bg-transparent">
                Check
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">Offers</span>
              <span className="text-sm text-gray-500">2 available</span>
              <Button variant="ghost" size="sm" className="text-rose-600">
                Check
              </Button>
            </div>
            <p className="text-sm text-gray-500">Coupon can be applied at checkout</p>
          </div>

          {/* Product Description */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Product Description</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>
                  <strong>Material:</strong> 925 Sterling Silver
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>
                  <strong>Plating:</strong> 18k Gold
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>
                  <strong>Weight:</strong> 10grams
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>
                  <strong>Stone Type:</strong> Premium Jerkin
                </span>
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Shipping</h3>
            <p className="text-sm text-rose-600">Get it by 25 Sept</p>
          </div>
        </div>
      </div>
    </div>
  )
}
