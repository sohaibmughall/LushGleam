/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    // Reduce memory usage during development
    optimizeCss: false,
    optimizePackageImports: [],
    // Disable JIT compilation to reduce memory usage
    turbotrace: false
  },
  // Reduce the impact of source maps
  productionBrowserSourceMaps: false,
  webpack: (config) => {
    // Optimize webpack memory usage
    config.optimization = {
      ...config.optimization,
      minimize: false,
      moduleIds: 'named',
    }
    return config
  }
};

module.exports = nextConfig;