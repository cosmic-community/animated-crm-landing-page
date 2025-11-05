'use client'

import { useState } from 'react'
import type { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]
  if (!currentTestimonial) {
    return null
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by thousands of businesses worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 rounded-2xl shadow-xl relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {currentTestimonial.metadata?.author_image?.imgix_url && (
                <img
                  src={`${currentTestimonial.metadata.author_image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                  alt={currentTestimonial.metadata.author_name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                  width={96}
                  height={96}
                />
              )}

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${
                        i < (currentTestimonial.metadata?.rating || 5)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "{currentTestimonial.metadata?.testimonial_text || ''}"
                </p>

                <div>
                  <div className="font-bold text-gray-900">
                    {currentTestimonial.metadata?.author_name || currentTestimonial.title}
                  </div>
                  {currentTestimonial.metadata?.author_position && (
                    <div className="text-gray-600">
                      {currentTestimonial.metadata.author_position}
                      {currentTestimonial.metadata?.company &&
                        ` at ${currentTestimonial.metadata.company}`}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}