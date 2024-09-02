import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // this adds the color scheme of the corporate design
                'primary-1': '#414042',
                'primary-2': '#9f0524',
                'secondary-1': '#939598',
                // this is an example
                'light-4': '#5C5C7B',
            },
            fontFamily: {
                commissioner: ['Commissioner', 'sans-serif'],
            },
        },
    },
    plugins: [nextui()],
}
export default config
