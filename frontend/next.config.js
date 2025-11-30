/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'localhost'],
    unoptimized: true,
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig