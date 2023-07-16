/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['images.unsplash.com', 'unsplash.com' , 'images.pexels.com' , 'pixabay.com' , 'cdn.pixabay.com' , 'cdn.stocksnap.io' ,]
    },
        experimental: {
          topLevelAwait: true,
        },
  
}

module.exports = nextConfig
