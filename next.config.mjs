/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: "export",
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
};

export default nextConfig;
