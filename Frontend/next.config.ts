import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resources",
        destination: "/resources/blog",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
