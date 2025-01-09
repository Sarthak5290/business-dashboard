import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/01-01-2025', // Adjusted to path parameter
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
