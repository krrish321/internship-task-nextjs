"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { cn } from "@/lib/utils"


export function SignUpForm({ className }: { className?: string }) {
  const [showPass1, setShowPass1] = useState(false)
  const [showPass2, setShowPass2] = useState(false)

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <h1 className="text-3xl md:text-4xl font-serif font-semibold text-center text-[#1e1e1e] text-balance">
        Sign Up and Step In
      </h1>
      <p className="mt-3 text-center text-[#717070]">
        Create your account to explore personalized rituals, styles, and planning tools.
      </p>

      <form className="mt-8 space-y-5">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[#1e1e1e]">
            Enter full Name
          </Label>
          <Input
            id="name"
            placeholder="Enter full Name"
            className="rounded-lg bg-[#ffffff] border border-[#d32f2f]/30 focus-visible:ring-[#d32f2f] placeholder:text-[#717070]"
          />
        </div>

        {/* Email or Mobile */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#1e1e1e]">
            Email Id or Mobile Number
          </Label>
          <Input
            id="email"
            placeholder="Enter your email address or mobile number"
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
              type={showPass1 ? "text" : "password"}
              placeholder="Create a strong password"
              className="pr-10 rounded-lg bg-[#ffffff] border border-[#d32f2f]/30 focus-visible:ring-[#d32f2f] placeholder:text-[#717070]"
            />
            <button
              type="button"
              aria-label={showPass1 ? "Hide password" : "Show password"}
              onClick={() => setShowPass1((v) => !v)}
              className="absolute inset-y-0 right-3 flex items-center text-[#717070]"
            >
              {showPass1 ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label htmlFor="password2" className="text-[#1e1e1e]">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password2"
              type={showPass2 ? "text" : "password"}
              placeholder="Create a strong password"
              className="pr-10 rounded-lg bg-[#ffffff] border border-[#d32f2f]/30 focus-visible:ring-[#d32f2f] placeholder:text-[#717070]"
            />
            <button
              type="button"
              aria-label={showPass2 ? "Hide password" : "Show password"}
              onClick={() => setShowPass2((v) => !v)}
              className="absolute inset-y-0 right-3 flex items-center text-[#717070]"
            >
              {showPass2 ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full h-11 rounded-lg bg-[#d32f2f] hover:opacity-95 text-white">
         Continue
        </Button>

        <p className="text-center text-[#717070]">
          Already have an account ?{" "}
          <Link href="/login" className="text-[#d32f2f] font-medium">
            Log In
          </Link>
        </p>
      </form>
    </div>
  )
}

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fff8e1] px-6 md:px-10">
      <SignUpForm className="py-10" />
    </main>
  )
}

