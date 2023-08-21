/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--primary)',
                'secondary': 'var(--secondary)',
                'tertiary': 'var(--tertiary)',
                'darkbg': 'var(--darkbg)',
            },
        },
        fontFamily: {
            'gotham': ['Gotham', 'sans-serif'],
            'sf': ['SF Pro', 'sans-serif'],
        }
    },
    darkMode: 'class',
    plugins: [],
}
