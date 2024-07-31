// next.config.js
require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other Next.js configuration options go here

  env: {
    NPM_TOKEN: process.env.NPM_TOKEN,
    SUBSCRIBER_API_URL: process.env.SUBSCRIBER_API_URL,
  },
};

module.exports = nextConfig;



