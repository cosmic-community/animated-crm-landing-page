import type { HeroSection as HeroType } from '@/types'

interface HeroSectionProps {
  hero: HeroType;
}

export default function HeroSection({ hero }: HeroSectionProps) {
  const backgroundImage = hero.metadata?.background_image?.imgix_url

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage}?w=1920&h=1080&fit=crop&auto=format,compress)`
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6 opacity-0">
            {hero.metadata?.headline || hero.title}
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-200 mb-8 opacity-0">
            {hero.metadata?.subheadline || 'Streamline your business operations with our powerful CRM platform'}
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
            <a
              href={hero.metadata?.cta_primary_link || '#contact'}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {hero.metadata?.cta_primary_text || 'Get Started Free'}
            </a>
            <a
              href={hero.metadata?.cta_secondary_link || '#features'}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              {hero.metadata?.cta_secondary_text || 'Learn More'}
            </a>
          </div>
        </div>
      </div>

      {/* Animated decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </section>
  )
}