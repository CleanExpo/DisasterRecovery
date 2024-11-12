/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com'],
    unoptimized: true
  },
  env: {
    NETLIFY_NEXT_PLUGIN_SKIP: "true"
  }
}

module.exports = nextConfig
