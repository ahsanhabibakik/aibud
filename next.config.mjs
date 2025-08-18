/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
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
