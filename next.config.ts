import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['mdx', 'ts', 'tsx', 'js', 'jsx'],
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
