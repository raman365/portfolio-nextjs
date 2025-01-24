 /** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
      unoptimized: true, // Disable the default Image Optimization API
    },
    assetPrefix: './', // Required for GitHub Pages
  };
  
  export default nextConfig; // Use export default for .mjs files
  
  