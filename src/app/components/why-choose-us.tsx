"use client"

import { motion } from "framer-motion"
import { TrendingUp, Shield, Users, Award } from "lucide-react"

const reasons = [
  {
    icon: TrendingUp,
    title: "Market-Leading Returns",
    description: "Our investment strategies have consistently outperformed market benchmarks.",
  },
  {
    icon: Shield,
    title: "Secure Investments",
    description: "Your investments are protected by state-of-the-art security measures.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of financial experts has decades of combined experience.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized globally for excellence in investment management.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine innovative investment strategies with deep market expertise to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <reason.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

