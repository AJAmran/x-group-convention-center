import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'shimanto.x-grouprestaurant.com',
      },
      {
        protocol: 'https',
        hostname: 'iconape.com',
      },
      {
        protocol: 'https',
        hostname: 'images.seeklogo.com',
      },
      {
        protocol: 'https',
        hostname: 'bfsa.teletalk.com.bd',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

export default nextConfig;
