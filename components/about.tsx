import { Button } from "@/components/ui/button"
import Image from "next/image"

export  function About() {
  return <div>
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

  </div>;
}

