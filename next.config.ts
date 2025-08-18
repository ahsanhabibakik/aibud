import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@tabler/icons-react']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ghost.canada-coolify.aukikaurnab.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
