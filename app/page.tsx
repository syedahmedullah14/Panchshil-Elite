import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ImageSlider from "@/components/ImageSlider"
import { HeroSlider } from "@/components/HeroSlider"




export default function Home() {
  return (
    <main className="min-h-screen mt-4">
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
            <Link href="#home" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#about-us" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="#our-team" className="text-sm font-medium hover:text-primary">
              Our Team
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Button>Book Now</Button>
          </div>
        </div>
      </nav>

      <HeroSlider />

      {/* Hero Section */}
      {/* <section className="relative h-screen">

      
        <Image
          src="/P1.PNG"
          alt="Panchshil Elite Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-center">
         
          <h2 className="text-xl md:text-6xl font-bold text-white/80 max-w-2xl">
          The Building partner that delivers what we say we will, or better.   
          </h2>
          
          <Button className="mt-8 w-fit" variant="secondary" size="lg">
            Download Brochure
          </Button>
        </div>
      </section> */}

      {/* Floor Plans Section */}
      <section id="floor-plans" className="py-20 bg-gray-200 ">
        <div className="container mx-auto">
          <div className="grid grid-flow-col justify-between gap-5">
            {/* <p className="text-blue-950 font-bold text-xl">As problem solvers and 'people-people, we have been delivering a consistently high standard of work in Maharashtra region for more than 25 years.</p> */}
            <p className="text-blue-950 font-bold text-sm">Welcome to Panchshil Elite! <br /><br />
            Immerse yourself in a world of luxury and sophistication at Panchshil Elite.
            Our 2& 3 BHK Premium Homes offer an unparalleled living experience, with impeccable design, top-of-the-line amenities, and a prestigious location. Step into a realm where elegance meets comfort, and make Panchshil Elite your perfect abodes
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
         <div className="container mx-auto m-20">
         <div className="grid grid-cols-2 md:grid-flow-row justify-between gap-8">
            <p className="text-blue-950 font-bold text-xl">Unmatched Desingn and Architecture <br /> <br />Experience architectural brilliance and exquisite design at Panchshil Elite. Every corner of our premium homes is meticulously crafted to elevate your living experience. From spacious interiors to stunning views, indulge in a space that effortlessly combines aesthetics with functionality, setting a new standard in modern living.</p>
            
            <div className="relative aspect-video  overflow-hidden">
              <Image
                src="/P3.PNG"
                alt="3BHK Floor Plan"
                fill
                className="object-contain"
              />
            </div>
          </div>
         </div>
      </section>

      <section className="bg-[#fecf4f]">
         <div className="container mx-auto m-20 bg-[#fecf4f]">
          <div className="grid grid-cols-1 md:grid-flow-row justify-between gap-8">
           <div className="relative aspect-video  overflow-hidden">
              <Image
                src="/P13.PNG"
                alt="3BHK Floor Plan"
                fill
                className="object-fill"
              />
            </div>
          {/* <p className="text-blue-950 font-bold text-xl">Unmatched Desingn and Architecture <br /> <br />Experience architectural brilliance and exquisite design at Panchshil Elite. Every corner of our premium homes is meticulously crafted to elevate your living experience. From spacious interiors to stunning views, indulge in a space that effortlessly combines aesthetics with functionality, setting a new standard in modern living.</p> */}
            
            
          </div>
         </div>
      </section>
      

      <section>
         <div className="container mx-auto m-20">
         <div className="grid grid-cols-2 md:grid-flow-row justify-between gap-8">
            <p className="text-blue-950 font-bold text-xl">Invest in Your Dream Home <br /> <br />Panchshil Elite offers an excellent investment opportunity. With its prime location, superior quality construction, & impeccable amenities, these 2 & 3 BHK Premium Homes are not just homes, but assets for a lifetime.</p>
            
            <div className="relative aspect-video  overflow-hidden">
              <Image
                src="/hero.jpg"
                alt="3BHK Floor Plan"
                fill
                className="object-cover"
              />
            </div>
          </div>
         </div>
      </section>

      <section className="bg-[#fecf4f]">
         <div className="container mx-auto mt-20 bg-[#fecf4f]">
         <div className="justify-between">
         <p className="text-blue-950 font-bold text-xl text-center py-10">Prime Location, Unmatched Convenience <br /> <br />Panchshil Elite offers an excellent investment opportunity. With its prime location, superior quality construction, & impeccable amenities, these 2 & 3 BHK Premium Homes are not just homes, but assets for a lifetime.</p>

            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/P12.PNG"
                alt="3BHK Floor Plan"
                fill
                className="object-contain"
              />
            </div>

          </div>
         </div>
      </section>

      <section>
        <div className="container mx-auto mt-10 mb-10">
          <h1 className="text-4xl text-center font-bold m-10">Project Specifications</h1>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-xl font-bold mb-7">COMMON FACILITIES</h1>
              <p className="my-2">Seismic resistant RCC frame structure.</p>
              <p className="my-2">External walls 6" in RED brick work with double coat sand faced with texture paint</p>
              <p className="my-2">Internal walls 4" In RED brick work with Gypsum finish walls with OBD paint</p>
              <p className="my-2">Internal walls 4" In RED brick work with Gypsum finish walls with OBD paint</p>
              <p className="my-2">One lift/elevator and elevator equipments for apartment building (Kone/Schindler/OTIS or Equivalent make)</p>

              <h1 className="text-xl font-bold my-7">TOILETS</h1>
              <p className="my-2">Designer Gi tile dado upto lintel level for toilet (Kajaria/RAK/Varmora or equivalent)</p>
              <p className="my-2">Granite door frame with laminated flush door</p>
              <p className="my-2">Sanitary ware (Jaguar/American standard or equivalent)</p>
              <p className="my-2">Standard quality C.P. fitting</p>
              <h1 className="text-xl font-bold my-7">ELECTRICAL</h1>
              <p className="my-2">Concealed high quality branded Copper wiring</p>
              <p className="my-2">Ample light points with Legrand/Anchor make modular switches</p>
              <p className="my-2">T.V. point in living & master bed</p>
              <p className="my-2">Power point in kitchen and toilet</p>
              <p className="my-2">Power point in kitchen and toilet</p>
              <p className="my-2">A.C. point in living and all bedrooms</p>
              <p className="my-2">Provision for battery backup</p>

            </div>
            <div>
              <h1 className="text-xl font-bold mb-7">KITCHEN</h1>
              <p className="my-2">Kitchen platform with Black granite</p>
              <p className="my-2">Stainless steel kitchen sink (Nirali or equivalent)</p>
              <p className="my-2">Designer glazed tile dado up to lintel level above kitchen platform (Kajaria/RAK/ Simpolo or equivalent)              </p>
              <p className="my-2">Provision and electric point for R.C. water</p>

              <h1 className="text-xl font-bold my-7">DOORS & WINDOWS</h1>
              <p className="my-2">Main door laminated ply frame with decorative laminated flush door fitting with night match</p>
              <p className="my-2">All other doors with laminated ply door frame and laminated flush door & S.S. fitting and fixture</p>
              <p className="my-2">M.S. powder coated French doors with grill for balcony</p>
              <p className="my-2">Three track coated Aluminium window with M.S. grill and granite cladding from all sides</p>
              <p className="my-2">Glass railing for balconies</p>
              <h1 className="text-xl font-bold my-7">FLOORING</h1>
              <p className="my-2">GVT/Vitrified tiles flooring in all rooms (Kajaria/Varmora or equivalent)</p>
              <p className="my-2">Antiskid tile flooring for balcony & terrace</p>
              
            </div>
          
          </div>
          </div>
      </section>

      {/* <section id="contact" className="py-20 bg-red-600 text-white">
        <div className="container mx-auto  text-center">
          <h2 className="text-3xl font-bold mb-8 text-justify px-60">"Your experience and advice was invaluable 
            in progressing the work through to a successfull completion"
          </h2>
          <p className="text-lg mb-6 text-white/80">-Mike Morgan, Fletcher Construction</p>
        </div>
      </section> */}


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-xl mb-6">Ready to find your dream home?</p>
          <Button variant="secondary" size="lg">
            Call: +91 9403885726
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-10">
          <h1 className="text-center text-lg font-bold mt-5 text-[#fecf4f]">Associate Partners</h1>
          <p className="text-center text-xl mb-10">Bhusan Kankariya   |   Satish Ostwal   |   Rajendra Desarda</p>
          {/* <h1 className="text-2xl mb-3">Panchshil Elite</h1> */}
          <div className="grid grid-cols-3 md:grid-row gap-10">
           
            <p className="text-sm text-white">+91 9403885726 <br /> +91 8484847374 <br /> info@panchshil.com</p>
            <p className="text-sm text-white">Office Address: Office No. 5, Malge Majestic, Near Vyankatesh Mangal Karyala, Sutgirni Chowk Road, Garkheda, Chh. Sambhajinagar - 431001</p>
            <p className="text-sm text-white">Site Address: "Panchshil Elite", Plot NO. 66 & 67, CTS NO. 12375 & 12376, Surana Nagar, Jalna Road, Chh Sambhajinagar - 431005</p>
             {/* <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.PNG-n7eEnhleaPsnClRKXJ1JAYVl2ME1d7.png"
              alt="Panchshil Group Logo"
              width={100}
              height={35}
              className="mb-4 md:mb-0 invert content-end"
            /> */}
          </div>
          <p className="text-sm text-gray-200 text-center mt-5"> © 2024 Panchshil Group. All rights reserved.</p>
        </div>
      </footer>
      
    </main>
  )
}

