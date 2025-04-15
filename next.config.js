/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: 'vercel.com'
    }]
  }
};

module.exports = nextConfig;
