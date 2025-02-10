import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.PNG-n7eEnhleaPsnClRKXJ1JAYVl2ME1d7.png"
              alt="Panchshil Group Logo"
              width={180}
              height={60}
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#floor-plans" className="text-sm font-medium hover:text-primary">
              Floor Plans
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Button>Book Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/P6.png"
          alt="Panchshil Elite Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">Welcome to Panchshil Elite</h1>
          <p className="mt-4 text-lg text-white/90 max-w-xl">Premium 2 & 3 BHK Residences</p>
          <Button className="mt-8 w-fit" variant="secondary">
            Download Brochure
          </Button>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="floor-plans" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Floor Plans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P3.PNG-MOZCnGgjb19OMVQkCG0kgtrLig0l7u.png"
                alt="2BHK Floor Plan"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P4.PNG-rjRF4qMYgn28FZHqwlbWgwveeKSfeL.png"
                alt="3BHK Floor Plan"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-xl mb-6">Ready to find your dream home?</p>
          <Button variant="secondary" size="lg">
            Call: +91 1234567890
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.PNG-n7eEnhleaPsnClRKXJ1JAYVl2ME1d7.png"
              alt="Panchshil Group Logo"
              width={140}
              height={45}
              className="mb-4 md:mb-0 invert"
            />
            <p className="text-sm text-gray-400">© 2024 Panchshil Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

