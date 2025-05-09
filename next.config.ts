import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: false,
    webpack(config: Configuration) {
        config.module?.rules?.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack']
        });
        return config;
    }
    // allowedDevOrigins: ['http://localhost', 'http://127.0.0.1', 'http://ip-de-otro-dispositivo-en-la-misma-red']
};

export default nextConfig;
