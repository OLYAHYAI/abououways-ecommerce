/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'localhost'],
    unoptimized: true,
  },
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig