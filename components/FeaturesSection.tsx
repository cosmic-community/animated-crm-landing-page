import type { Feature } from '@/types'

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  if (!features || features.length === 0) {
    return null
  }

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up">
            Everything you need to manage customer relationships effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {feature.metadata?.icon && (
                <div className="text-5xl mb-4">{feature.metadata.icon}</div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.metadata?.description || ''}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}