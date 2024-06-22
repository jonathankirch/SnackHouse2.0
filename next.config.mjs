/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{  
    remotePatterns: [
          {
              protocol: 'https',
              hostname: 'https://snack-house2-0.vercel.app/'
          }, 
    ]
}
};

export default nextConfig;
