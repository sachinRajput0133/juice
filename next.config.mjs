import { withSentryConfig } from '@sentry/nextjs';
import nextTranslate from 'next-translate';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      's3.amazonaws.com',
      'incentivio.s3.amazonaws.com',
      'deliverectdirectus.techtris.app',
      'techtris.sandbarhostel.app',
      'storage.googleapis.com',
      'storage.cloud.google.com',
    ],
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_FETCH_URL: process.env.NEXT_PUBLIC_FETCH_URL,
    NEXT_PUBLIC_DOMAIN_URL: process.env.NEXT_PUBLIC_DOMAIN_URL,
    NEXT_PUBLIC_DIRECTUS_URL: process.env.NEXT_PUBLIC_DIRECTUS_URL,
    NEXT_PUBLIC_SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
    NEXT_PUBLIC_AMPLITUDE_ID: process.env.NEXT_PUBLIC_AMPLITUDE_ID,
    ACTIVE_SERVER: process.env.ACTIVE_SERVER,
    NEXT_PUBLIC_ONE_SIGNAL_APP_ID: process.env.NEXT_PUBLIC_ONE_SIGNAL_APP_ID,
  },
  distDir: process.env.BUILD_DIR || '.next', // Use custom directory if specified
  webpack: (config) => {
    return config;
  },
};

export default withSentryConfig(nextTranslate(nextConfig), {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: 'gf-5n',
  project: 'deliverect-website',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
