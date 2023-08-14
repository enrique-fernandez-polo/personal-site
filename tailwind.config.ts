import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1F2235',
        text: '#E5E5E5',
      },
    },
  },
  plugins: [
    require('tailwindcss-fluid-type'),
    require('@tailwindcss/typography'),
  ],
}
export default config
