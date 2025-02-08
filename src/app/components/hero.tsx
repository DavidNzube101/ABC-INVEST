"use client"

import { motion } from "framer-motion"
import Button from "@/app/components/Button"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted className="absolute w-full h-full object-cover" style={{ filter: "brightness(0.7)" }}>
        <source src="/placeholder.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-800/90" />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Better financial
          <br />
          lives built
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Unparalleled budgeting features. Data import. Zero ads. Bank-grade security. 40-year legacy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3">Get Started Now</Button>
        </motion.div>
      </div>
    </div>
  )
}

