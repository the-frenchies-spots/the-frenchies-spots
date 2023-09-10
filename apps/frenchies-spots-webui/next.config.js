/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  ...withPWA({
    dest: "public",
    register: true,
    skipWaitin: true,
    disable: process.env.NODE_ENV === "development",
  }),

  transpilePackages: [
    "@frenchies-spots/material",
    "@frenchies-spots/gql",
    "@frenchies-spots/hooks",
    "@frenchies-spots/utils",
  ],
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
