import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lieterasi.sjw48.com'
      }
    ]
  }
};

export default nextConfig;
