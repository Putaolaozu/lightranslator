/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: true },
};

const withPWA = require("next-pwa")({
  dest: "public",
  fallbacks: {
    image: "/assets/*",
    document: "/_offline", // if you want to fallback to a custom page other than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
});
module.exports = nextConfig;
module.exports = withPWA({
  images: {
    domains: ["lightfan.netlify.app"],
  },
});
