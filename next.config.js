/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com'],
  },
  output: 'export'  // Required for Netlify deployment
}

module.exports = nextConfig
