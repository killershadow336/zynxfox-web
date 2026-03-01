/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/zynxfox-web',
  assetPrefix: '/zynxfox-web/',
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
