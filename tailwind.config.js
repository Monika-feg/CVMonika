/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.ts',
        './resources/**/*.jsx',
        './resources/**/*.tsx',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Concert One', 'Quicksand', 'Nunito', 'ui-sans-serif', 'system-ui'],
                mono: ['Fira Mono', 'ui-monospace'],
            },
        },
    },
    plugins: [],
}
