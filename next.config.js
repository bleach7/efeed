/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["courses-top.ru"],
  },
};

module.exports = nextConfig;
