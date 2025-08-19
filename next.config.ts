
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        // Resolve symlink issues
        'replit': false,
      },
    },
  },
  // Fix cross-origin warnings
  allowedDevOrigins: ['*.replit.dev'],
};

export default nextConfig;
