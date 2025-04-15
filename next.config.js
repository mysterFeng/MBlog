/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  assetPrefix: '/',
  basePath: '',
  images: {
    unoptimized: true,
    domains: ['*']
  }
};

module.exports = nextConfig;
