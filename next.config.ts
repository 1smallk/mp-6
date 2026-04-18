import type { NextConfig } from "next";
import { resolve } from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    root: resolve('.'),
  },
  /* config options here */
};

export default nextConfig;
