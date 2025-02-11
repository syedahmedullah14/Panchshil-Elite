"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "hero.jpg",
    title: "Welcome to Panchshil Elite.",
    subtitle:
      "Immerse yourself in a world of luxury and sophistication at Panchshil Elite. Our 2 & 3 BHK Premium Homes offer an unparalleled living experience, with impeccable design, top-of-the-line amenities, and a prestigious location.",
  },
  {
    image: "P1.PNG",
    title: "The Building partner that delivers what we say we will, or better",
    subtitle: "Step into a realm where elegance meets comfort, and make Panchshil Elite your perfect abode.",
  },
  {
    image: "P2.PNG",
    title: "Architectural Excellence",
    subtitle:
      "Experience architectural brilliance and exquisite design. Every corner is meticulously crafted to elevate your living experience.",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 3000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-transform duration-500 ease-in-out",
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full",
          )}
        >
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container px-4">
              <div
                className={cn(
                  "max-w-2xl space-y-6 transition-all duration-500",
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white">{slide.title}</h1>
                <p className="text-lg md:text-xl text-white/90">{slide.subtitle}</p>
                <div className="flex gap-4 pt-4">
                  <Button variant="secondary" size="lg">
                    Download Brochure
                  </Button>
                  {/* <Button variant="outline" size="lg" className="text-white border-white hover:text-white">
                    Learn More
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide ? "bg-white scale-100" : "bg-white/50 scale-75 hover:scale-90 hover:bg-white/75",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

