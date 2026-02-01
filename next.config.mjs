/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;
