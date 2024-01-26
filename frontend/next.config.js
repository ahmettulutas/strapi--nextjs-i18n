/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 's3-alpha-sig.figma.com' },
      { hostname: 'localhost' },
      { hostname: 'flowbite.s3.amazonaws.com' },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1338',
        pathname: '/uploads/**',
      }

    ]
  }

}

module.exports = nextConfig
