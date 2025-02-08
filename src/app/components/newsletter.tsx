"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  return (
    <section className="py-20 bg-emerald-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Market Insights</h2>
          <p className="text-emerald-100 mb-8">
            Subscribe to our newsletter for the latest investment news and market analysis.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-lg flex-1 max-w-md" />
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50">Subscribe Now</Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

