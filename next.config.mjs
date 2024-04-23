/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.dummyjson.com', 'themoviedb.org'],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
        locale: false,
      },
    ];
  },
};

export default nextConfig;
