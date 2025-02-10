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
            <Link href="#about-us" className="text-sm font-medium hover:text-primary">
              About us
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
          src="/P1.PNG"
          alt="Panchshil Elite Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-center">
          {/* <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">Welcome to Panchshil Elite <br /> */}
          {/* </h1><br /> */}
          <h2 className="text-xl md:text-6xl font-bold text-white/80 max-w-2xl">
          The Building partner that delivers what we say we will, or better.   
          </h2>
          {/* <p className="mt-4 text-xl text-white/80 max-w-xl">Immerse yourself in a world of luxary and sophistication at Panchshil Elite.  Our 2 & 3 BHK Premium Homes offer an unparallel living experience, with impeccable design, top-of-the-line amenities, and a prestigious location. Step into a realm where elegance meets comfort, and make Panchshil Elite your perfect abode.</p> */}
          {/* <p className="mt-4 text-lg text-white/90 max-w-xl">Premium 2 & 3 BHK Residences</p> */}
          <Button className="mt-8 w-fit" variant="secondary">
            Download Brochure
          </Button>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="floor-plans" className="py-20 bg-gray-200 ">
        <div className="container mx-auto">
          <div className="grid grid-flow-col justify-between gap-5">
            {/* <p className="text-blue-950 font-bold text-xl">As problem solvers and 'people-people, we have been delivering a consistently high standard of work in Maharashtra region for more than 25 years.</p> */}
            <p className="text-blue-950 font-bold text-xl">Welcome to Panchshil Elite! <br /><br />
            Immerse yourself in a world of luxury and sophistication at Panchshil Elite.
            Our 2 & 3 BHK Premium Homes offer an unparalleled living experience, with impeccable design, top-of-the-line amenities, and a prestigious location. Step into a realm where elegance meets comfort, and make Panchshil Elite your perfect abodes
            </p>
            <p className="pl-5 text-black/70">We specialise in building eco-friendly passive homes, remedial work on leaky buildings, extensions, additions, renovations and project management. Our hand-picked team are highly experienced and passionate about quality results. Check out these residential and commercial projects and talk to us today about the project you are considering.</p>
            <p className="pl-5 text-black/70">We specialise in building eco-friendly passive homes, remedial work on leaky buildings, extensions, additions, renovations and project management. Our hand-picked team are highly experienced and passionate about quality results. Check out these residential and commercial projects and talk to us today about the project you are considering.</p>

          </div>
          {/* <h2 className="text-3xl font-bold text-center mb-12">Floor Plans</h2> */}
          
          <div className="w-fill mb-10">
          <Button className="mt-8 w-fit content-centre" >
            The Panchshil Difference
          </Button>
          </div>
          <div className="">
            <div className="relative aspect-video  overflow-hidden">
              <Image
                src="/10.PNG"
                alt="3BHK Floor Plan"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-flow-row mt-10">
            <div className="relative aspect-video  overflow-hidden">
              <Image
                src="/P4.PNG"
                alt="3BHK Floor Plan"
                fill
                className="object-fill"
              />
            </div>
            <div className="relative aspect-video  overflow-hidden">
              <Image
                src="/P3.PNG"
                alt="3BHK Floor Plan"
                fill
                className="object-fill"
              />
            </div>
            </div>

          </div>
        </div>
      </section>
      
      <section>
         
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-red-600 text-white">
        <div className="container mx-auto  text-center">
          <h2 className="text-3xl font-bold mb-8 text-justify px-60">"Your experience and advice was invaluable 
            in progressing the work through to a successfull completion"
          </h2>
          <p className="text-lg mb-6 text-white/80">-Mike Morgan, Fletcher Construction</p>
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
          <h1 className="text-2xl mb-3">Panchshil Elite</h1>
          <div className="grid grid-cols-4 md:grid-row gap-10">
           
            <p className="text-sm text-gray-400">0240-202000 <br /> 0240-202000 <br /> info@panchshil.com</p>
            <p className="text-sm text-gray-400">Panchshil Limited <br />4th avenue, <br />Bandra, Mumbai</p>
            <p className="text-sm text-gray-400">Panchshil is a construction company with a longstanding reputation of delivering consistently on time, within budget and with no compromise on quality.</p>
             <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.PNG-n7eEnhleaPsnClRKXJ1JAYVl2ME1d7.png"
              alt="Panchshil Group Logo"
              width={100}
              height={35}
              className="mb-4 md:mb-0 invert content-end"
            />
          </div>
        </div>
      </footer>
      
    </main>
  )
}

