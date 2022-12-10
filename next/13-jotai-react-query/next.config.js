/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    /**
     * @see: https://github.com/vercel/next.js/issues/41853
     */
    enableUndici: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
