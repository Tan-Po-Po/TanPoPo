/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  experimental: {
    serverActions: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "@/scss/styles.scss";`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["theartssociety.org", "wallpapers.com", "i.pinimg.com"],
  },
};
