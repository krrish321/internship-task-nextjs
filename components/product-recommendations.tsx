"use client"

import { Button } from "@/components/ui/button"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"

export function ProductRecommendations() {
  
  const products = [
    {
      id: 1,
      name: "Rose Gold Earrings with Alloy",
      price: 2999,
      originalPrice: 3999,
      image: "/JE05789-RGS300_3_lar.jpg",
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Diamond Stud Earrings",
      price: 4999,
      originalPrice: 5999,
      image: "/JE06864-1RP600_3_lar.jpg",
      isBestSeller: false,
    },
    {
      id: 3,
      name: "Gold Plated Necklace",
      price: 7999,
      originalPrice: 9999,
      image: "/JE07497-1RP900_3_lar.jpg",
      isBestSeller: true,
    },
    {
      id: 4,
      name: "Silver Chain Bracelet",
      price: 1999,
      originalPrice: 2499,
      image: "/JE07776-RGS300_3_lar.jpg",
      isBestSeller: false,
    },
  ]

  const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bestseller Badge */}
        {product.isBestSeller && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
            BestSeller
          </div>
        )}

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4">
        <h3 className="text-sm text-gray-900 mb-2">{product.name}</h3>
        <div className="flex items-center space-x-2 mb-3">
          <span className="font-bold text-gray-900">₹ {product.price}</span>
          <span className="text-sm text-gray-500 line-through">₹ {product.originalPrice}</span>
        </div>
        <div className="text-xs text-gray-500 mb-3">(5)</div>
        <Button className="w-full bg-rose-300 hover:bg-rose-400 text-white">Add to Cart</Button>
      </div>
    </div>
  )

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Similar to this section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Similar to this</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Top picks for you section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Top picks for you</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={`top-${product.id}`} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
