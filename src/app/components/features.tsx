"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Lock, Sparkles } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "No surprise charges or ads",
    description: "What you see is what you get",
    color: "bg-emerald-100",
  },
  {
    icon: Clock,
    title: "Trusted for over 40 years",
    description: "A track record of excellence",
    color: "bg-emerald-200",
  },
  {
    icon: Shield,
    title: "Bank-grade security",
    description: "Your data is protected",
    color: "bg-emerald-300",
  },
  {
    icon: Lock,
    title: "Your privacy matters",
    description: "We never share your data",
    color: "bg-emerald-400",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

