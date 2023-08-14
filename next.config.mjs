import million from 'million/compiler'
import unplugIcons from 'unplugin-icons/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(
      unplugIcons({
        compiler: 'jsx',
        jsx: 'react',
      }),
    )
    return config
  },
}

const millionConfig = {
  auto: { rsc: true },
}

export default million.next(nextConfig, millionConfig)
