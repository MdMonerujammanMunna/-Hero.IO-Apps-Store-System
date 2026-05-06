/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      // "https://i.ibb.co.com/Q3djQ2T1/whatsapp.png"
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
