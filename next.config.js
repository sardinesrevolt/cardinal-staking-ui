/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAINNET_PRIMARY: process.env.MAINNET_PRIMARY,
    BASE_CLUSTER: process.env.BASE_CLUSTER,
  },
  async rewrites() {
    return [
      {
        source: '/:path(.*)',
        destination: '/sardines-revolt',
        has: [
          {
            type: 'host',
            value: 'stake.roguesharks.org',
          },
          {
            type: 'host',
            value: 'stake.unfrgtn.space'
          },
          {
            type: 'host',
            value: 'stake.sardinesrevolt.com'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
