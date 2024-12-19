import type { NextConfig } from "next";
const createNextIntlPlugin = require('next-intl/plugin');

const nextConfig: NextConfig = {
  /* config options here */
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

