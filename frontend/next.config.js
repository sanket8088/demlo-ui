/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
