"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Investment Planning",
    title: "Strategic Planning",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Financial Growth",
    title: "Wealth Management",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Market Analysis",
    title: "Market Insights",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Portfolio Management",
    title: "Portfolio Optimization",
  },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Investment Approach
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

