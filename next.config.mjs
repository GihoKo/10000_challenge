/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const nextPWA = withPWA({
    dest: "public",
    disable: process.env.NODE_ENV === "develope",
});

const nextConfig = {};

export default nextPWA(nextConfig);
