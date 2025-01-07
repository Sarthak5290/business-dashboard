import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard?date=01-01-2025",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
