import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'CRM Platform - Manage Your Customer Relationships',
  description: 'Modern CRM solution to streamline your business operations and grow your customer relationships.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js"></script>
      </head>
      <body>
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
        {/* jQuery - Latest version */}
        <Script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        {/* Custom animations script */}
        <Script src="/animations.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}