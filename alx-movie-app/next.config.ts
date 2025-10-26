import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";
//import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",  
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"], // ✅ allow external image domain

  },
};

export default withPWA({
  ...nextConfig
})

//export default nextConfig;
