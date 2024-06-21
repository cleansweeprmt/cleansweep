/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/about-us',
            destination: '/about',
            permanent: true,
          },
          // Wildcard path matching
          {
            source: '/contact-us',
            destination: '/contact',
            permanent: true,
          },
          {
            source: '/blog',
            destination: '/resources',
            permanent: true,
          },
        ]
      },
    
};

export default nextConfig;
