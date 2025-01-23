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
  async headers() {
    return [
      {
        source: "bb-mail.png",
        headers: [
          {
            key: "Content-Type",
            value: "image/png",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
