"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-emerald-600">
          Quonus
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Use cases
          </Link>
          <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Resources
          </Link>
          <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Plans & pricing
          </Link>
          <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Support
          </Link>
          <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
            <Link href="/login">
                <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700">
                    Sign in
                </Button>
            </Link>
            <Link href="/signup">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Get started</Button>
            </Link>
        </div>
      </div>
    </motion.nav>
  )
}

