import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'


export default {
    root: './src',
    publicDir: '../static/',
    base: '/KillingMonsters/', 
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
                world: resolve(__dirname, "src/html/world.html"),
                bestiary: resolve(__dirname, "src/html/bestiary.html"),
                story: resolve(__dirname, "src/html/story.html"),
                about: resolve(__dirname, "src/html/about.html"),
            }
        }
        
    }
}