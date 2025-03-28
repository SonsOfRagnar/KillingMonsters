import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'


export default {
    root: './src',
    publicDir: '../static/',
    base: './', 
    server:
    {
        host: true,
    },
    build:
    {
        outDir: '../docs',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                html: resolve(__dirname, "src/html/bestiary.html"),
            }
        }
        
    }
}