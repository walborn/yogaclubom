/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true, // Optional: Adds trailing slashes for cleaner URLs
  images: { unoptimized: true },
}

export default nextConfig
