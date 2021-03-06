/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_KEY: process.env.API_KEY
  },
  images: {
    domains: ['image.tmdb.org']
  }
}

module.exports = nextConfig
