import type { NextConfig } from "next";

// https://static.miraheze.org

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lieterasi.sjw48.com',
        port: '',
        // pathname: '/my-bucket/**',
      },
    ],
  },
}

const nextConfig: NextConfig = {
  /* config options here */
};



export default nextConfig;
