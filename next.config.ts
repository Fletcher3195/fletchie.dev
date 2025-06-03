import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  images: {
    domains: ["avatars.githubusercontent.com"], // add any domains you use
  },
};

export default nextConfig;
