"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function LoginPage({ className }: { className?: string }) {
  const [showPass, setShowPass] = useState(false)

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fff8e1] px-6 md:px-10">
      <div className={cn("w-full max-w-md mx-auto", className)}>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-center text-[#1e1e1e]">
          Welcome Back
        </h1>
        <p className="mt-3 text-center text-[#717070]">
          Log in to continue planning your dream wedding.
        </p>

        <form className="mt-8 space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#1e1e1e]">
              Email Id
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="rounded-lg bg-[#ffffff] border border-[#d32f2f]/30 focus-visible:ring-[#d32f2f] placeholder:text-[#717070]"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#1e1e1e]">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                className="pr-10 rounded-lg bg-[#ffffff] border border-[#d32f2f]/30 focus-visible:ring-[#d32f2f] placeholder:text-[#717070]"
              />
              <button
                type="button"
                aria-label={showPass ? "Hide password" : "Show password"}
                onClick={() => setShowPass((v) => !v)}
                className="absolute inset-y-0 right-3 flex items-center text-[#717070]"
              >
                {showPass ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-11 rounded-lg bg-[#d32f2f] hover:opacity-95 text-white"
          >
            Log In
          </Button>

          {/* Link to signup */}
          <p className="text-center text-[#717070]">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-[#d32f2f] font-medium">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}
