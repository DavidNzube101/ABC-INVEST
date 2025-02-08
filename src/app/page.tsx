import Hero from "./components/hero"
import Features from "./components/features"
import Treasury from "./components/treasury"
import Navigation from "./components/navigation"
import Gallery from "./components/gallery"
import WhyChooseUs from "./components/why-choose-us"
import Testimonials from "./components/testimonials"
import Newsletter from "./components/newsletter"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Gallery />
      <Treasury />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}

