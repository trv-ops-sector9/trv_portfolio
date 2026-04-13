import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/trv_portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/trv_portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
