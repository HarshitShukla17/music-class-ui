
import FeaturedCourses from "@/components/FeaturedCourses"
import HeroSection from "@/components/HeroSection"
import Instructors from "@/components/Instructor"
import MusicSchoolTestimonials from "@/components/TestimonialCards"
import WhyChooseUs from "@/components/WhyChooseUs"

function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <Instructors />
      
    </main>
  )
}

export default Home
