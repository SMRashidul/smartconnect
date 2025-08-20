
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ['*.replit.dev', '*.replit.co']
  },
  images: {
    domains: ['via.placeholder.com']
  }
}

export default nextConfig
