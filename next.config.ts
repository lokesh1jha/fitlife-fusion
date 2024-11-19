import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['lh3.googleusercontent.com'], 
  },
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
};

export default nextConfig;
