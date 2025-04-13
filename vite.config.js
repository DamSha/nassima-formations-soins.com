// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { createServer } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/theme/js/main.js',
                'resources/theme/js/jquery.min.js',
                // 'resources/theme/js/jquery-migrate-3.0.1.min.js',
                // 'resources/theme/js/popper.min.js',
                // 'resources/theme/js/bootstrap.min.js',
                // 'resources/theme/js/owl.carousel.min.js',
                'resources/theme/js/jquery.waypoints.min.js',
                'resources/theme/js/slick/slick.min.js',
                'resources/theme/js/jquery.easing.1.3.js',
            ],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'public/build',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'resources/theme/js/main.js'),
                // app: resolve(__dirname, 'resources/theme/js/app.js'),
            },
        },
    },
    server: {
        host: 'localhost',
        port: 3000,
        proxy: {
            '/': 'https://localhost/',
        },
        watch: {
            usePolling: true,
            interval: 100,
            ignored: /node_modules/,
        },
    },
});
