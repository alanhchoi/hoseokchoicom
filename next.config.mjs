import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/books-i-read",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/books-i-read/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
