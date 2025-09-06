"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react" // close icon

export function CustomerReviews() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const reviews = [
    {
      name: "Anu",
      date: "16/08/24",
      text: "Such a gorgeous necklace. Got many compliments as well. Absolutely loved it",
      images: ["/Screenshot (235).png", "/Screenshot (234).png"],
    },
    {
      name: "Riya",
      date: "18/08/24",
      text: "Looks beautiful 😍❤️❤️ Go for it girls 😍😍 the quality is good.",
      images: ["/UE06401-1R00SE_3_lar.jpg"],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Customer Ratings</h2>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {review.name.charAt(0)}
                </span>
              </div>
              <span className="font-medium text-gray-900">{review.name}</span>
            </div>

            <p className="text-sm text-gray-500 mb-2">{review.date}</p>
            <p className="text-gray-700 mb-3">{review.text}</p>

            <div className="flex space-x-2">
              {review.images.map((img, i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded overflow-hidden cursor-pointer border"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    alt="review-img"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Big Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // background click closes modal
        >
          <div
            className="relative max-w-2xl max-h-[80vh] p-2"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <Image
              src={selectedImage}
              alt="Selected review"
              width={800}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
