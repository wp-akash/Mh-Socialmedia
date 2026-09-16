import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "placehold.co", // <-- Add this block
      },
      {
        protocol: "https",
        hostname: "alt.tailus.io", // <-- Add this block
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;