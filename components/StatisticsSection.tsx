'use client'

import { useEffect, useRef, useState } from 'react'
import type { Statistic } from '@/types'

interface StatisticsSectionProps {
  statistics: Statistic[];
}

export default function StatisticsSection({ statistics }: StatisticsSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  if (!statistics || statistics.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center text-white">
              <div className="stat-number text-5xl md:text-6xl font-bold mb-2">
                {isVisible && (
                  <>
                    {stat.metadata?.prefix || ''}
                    <span data-target={stat.metadata?.value || '0'}>0</span>
                    {stat.metadata?.suffix || ''}
                  </>
                )}
              </div>
              <div className="text-xl text-blue-100">
                {stat.metadata?.label || stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}