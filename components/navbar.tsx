import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.PNG-n7eEnhleaPsnClRKXJ1JAYVl2ME1d7.png"
            alt="Panchshil Group Logo"
            width={180}
            height={60}
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="#floor-plans" className="text-sm font-medium hover:text-primary">
            Floor Plans
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
          <Button className="bg-primary hover:bg-primary/90">Book Now</Button>
        </div>
      </div>
    </nav>
  )
}

