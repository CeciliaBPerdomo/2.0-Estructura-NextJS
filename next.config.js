/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https", 
                hostname: 'd2yoo3qu6vrk5d.cloudfront.net', 
                port: "", 
                pathname: "/**"
            }
        ]
    }
}

module.exports = nextConfig
