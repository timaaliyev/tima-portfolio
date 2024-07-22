/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
