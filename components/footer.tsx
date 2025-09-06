"use client"

import { Linkedin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-rose-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Our Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Store Locator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Jewellery Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Details */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Details</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  International Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  FAQ's and Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Details 2 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Details</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  International Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  FAQ's and Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>Elegant Jewels</p>
              <p>SF-11, Ansal Fortune Arcade, K Block, K-27,</p>
              <p>Sector 18, Noida, Uttar Pradesh 201301</p>
              <p className="mt-4">For any suggestions, queries or</p>
              <p>complaints please contact us:</p>
              <p className="mt-2">Elegantjewel Private Limited</p>
              <p>contact@elegantjewels.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Our Social Links:</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500">© 2024 Elegant Jewels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
