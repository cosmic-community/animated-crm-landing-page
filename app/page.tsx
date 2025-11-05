import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import StatisticsSection from '@/components/StatisticsSection'
import ContactSection from '@/components/ContactSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getHeroContent, getFeatures, getTestimonials, getStatistics } from '@/lib/cosmic'

export default async function Home() {
  const [heroContent, features, testimonials, statistics] = await Promise.all([
    getHeroContent(),
    getFeatures(),
    getTestimonials(),
    getStatistics(),
  ])

  return (
    <main className="min-h-screen">
      <Header />
      {heroContent && <HeroSection hero={heroContent} />}
      {features.length > 0 && <FeaturesSection features={features} />}
      {statistics.length > 0 && <StatisticsSection statistics={statistics} />}
      {testimonials.length > 0 && <TestimonialsSection testimonials={testimonials} />}
      <ContactSection />
      <Footer />
    </main>
  )
}