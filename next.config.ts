import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
    imageSizes: [64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Override Permissions-Policy without the experimental 'browsing-topics' token to avoid console warnings
          {
            key: "Permissions-Policy",
            value: [
              "geolocation=()",
              "microphone=()",
              "camera=()",
              "accelerometer=()",
              "autoplay=()",
              "encrypted-media=()",
              "fullscreen=*",
              "picture-in-picture=*",
              "payment=()",
            ].join(", "),
          },
        ],
      },
    ]
  },
}

export default nextConfig
