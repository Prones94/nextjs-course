import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects(){
      return [
          {
              source: "/sign_in",
              destination: "/sign-in",
              permanent: true,
          },
          {
              source: "/sign_up",
              destination: "/sign-up",
              permanent: true,
          }
      ]
  }
};

export default nextConfig;
