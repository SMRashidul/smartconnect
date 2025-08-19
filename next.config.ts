
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      // Remove problematic replit alias
    },
  },
  // Fix cross-origin warnings
  experimental: {
    allowedDevOrigins: ['*.replit.dev'],
  },
};

export default nextConfig;
