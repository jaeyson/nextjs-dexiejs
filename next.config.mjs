/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  assetPrefix: isProd ? '/nextjs-dexiejs' : '',
  basePath: isProd ? '/nextjs-dexiejs' : ''
};

export default nextConfig;
