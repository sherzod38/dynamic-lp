import { BookOpen, Users, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroCarousel from "../components/hero-carousel"
import FeatureCard from "../components/feature-card"
import TestimonialCard from "../components/testimonial-card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-medium">Learning Center</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div>
            <Button variant="outline" className="mr-2">
              Log in
            </Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section className="relative">
        <HeroCarousel />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Learning Center</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a focused environment designed to help you achieve your learning goals with expert guidance and
              modern facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Expert Instructors"
              description="Learn from industry professionals with years of experience in their respective fields."
            />
            <FeatureCard
              icon={<Calendar className="h-8 w-8" />}
              title="Flexible Scheduling"
              description="Choose from morning, afternoon, or evening sessions to fit your busy lifestyle."
            />
            <FeatureCard
              icon={<MapPin className="h-8 w-8" />}
              title="Convenient Location"
              description="Centrally located with easy access to public transportation and parking."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Our Learning Center</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, our learning center has helped thousands of students achieve their educational goals
                through personalized instruction and a supportive learning environment.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that everyone has the potential to excel when given the right resources and guidance. Our
                mission is to provide accessible, high-quality education that empowers learners of all ages.
              </p>
              <Button size="lg">Learn More About Us</Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Learning center interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our students have to say about their experience at our
              learning center.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The instructors are incredibly knowledgeable and patient. I've learned more in 3 months here than I did in a year of self-study."
              author="Sarah Johnson"
              role="Web Development Student"
            />
            <TestimonialCard
              quote="The flexible schedule allowed me to continue working while pursuing my education. The staff went above and beyond to accommodate my needs."
              author="Michael Chen"
              role="Data Science Student"
            />
            <TestimonialCard
              quote="I appreciate the small class sizes and personalized attention. It's made a huge difference in my learning journey."
              author="Emma Rodriguez"
              role="Graphic Design Student"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join our community of learners today and take the first step toward achieving your educational goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Schedule a Tour
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Course Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-6 w-6" />
                <span className="text-xl font-medium">Learning Center</span>
              </div>
              <p className="text-gray-600">
                Empowering learners through quality education and personalized instruction.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-600 hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-600 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-600 hover:text-gray-900">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Courses</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <address className="not-italic text-gray-600">
                <p>123 Education Street</p>
                <p>Learning City, LC 12345</p>
                <p className="mt-2">info@learningcenter.com</p>
                <p>(123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Learning Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
