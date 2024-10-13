/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src', 'styles')],
    prependData: `@import "./src/styles/_vars.scss"; @import "./src/styles/_mixins.scss";`,
  },
};

export default nextConfig;
