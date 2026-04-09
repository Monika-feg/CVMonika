import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        define: {
            // Only expose specific APP_ variables we need
            'import.meta.env.APP_VERSION': JSON.stringify(env.APP_VERSION || '1.0.0'),
            'import.meta.env.APP_NAME': JSON.stringify(env.APP_NAME || 'cvmonika'),
        },
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.tsx'],
                ssr: 'resources/js/ssr.tsx',
                refresh: true,
            }),
            react(),
            tailwindcss(),
        ],
        server: {
            watch: {
                ignored: ['**/dev_*_data/**', '**/storage/**'],
            },
            host: env.VITE_HOST || '0.0.0.0',
            port: parseInt(env.VITE_PORT) || 5173,
            cors: {
                origin: [
                    'http://localhost:8080',
                    'http://cvmonika.test',
                    'https://cvmonika.test',
                    /^http:\/\/localhost(:\d+)?$/,
                    /^https:\/\/localhost(:\d+)?$/,
                    /^http:\/\/0\.0\.0\.0(:\d+)?$/,
                    /^https:\/\/0\.0\.0\.0(:\d+)?$/,
                    /\.orb\.local$/,
                ],
                credentials: true,
            },
            hmr: {
                host: 'localhost',
                port: parseInt(env.VITE_PORT) || 5173,
            },
        },
        esbuild: {
            jsx: 'automatic',
        },
        resolve: {
            alias: {
                'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
            },
        },
    };
});
