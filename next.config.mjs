/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        // pathname: "/aa7f294677adda00fa96235a76426c01.jpg",
      },
    ],
  },
};

export default nextConfig;
