import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/flygt-multitrode",
        destination: "/flygt-multitrode-replacement",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
