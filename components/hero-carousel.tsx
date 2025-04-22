"use client"

import { useState, useEffect, JSX, SVGProps } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import Image from "next/image"

const carouselItems = [
  {
    id: 1,
    title: "Welcome to Our Learning Center",
    description: "A place where knowledge meets opportunity. Discover your potential with our expert-led courses.",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Explore Courses",
  },
  {
    id: 2,
    title: "Learn at Your Own Pace",
    description:
      "Flexible schedules designed to fit your busy lifestyle. Morning, afternoon, and evening sessions available.",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "View Schedule",
  },
  {
    id: 3,
    title: "State-of-the-Art Facilities",
    description: "Modern classrooms, computer labs, and study areas designed to enhance your learning experience.",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Take a Tour",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Carousel slides */}
      <div className="relative h-full">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">{item.title}</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">{item.description}</p>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                {item.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white"
          onClick={scrollToFeatures}
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function ChevronDown(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
