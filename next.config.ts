import type { NextConfig } from "next";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [];

if (supabaseUrl) {
  const { protocol, hostname, port } = new URL(supabaseUrl);

  remotePatterns.push({
    protocol: protocol.replace(":", "") as "http" | "https",
    hostname,
    port,
    pathname: "/storage/v1/object/public/**",
  });
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-DNS-Prefetch-Control', value: 'off' },
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
        ],
      },
    ];
  },
};

export default nextConfig;
