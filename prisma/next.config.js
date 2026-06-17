/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'systemmarket.vercel.app', '*.vercel.app'],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
