import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import { visualizer } from 'rollup-plugin-visualizer';
import { nodeResolve } from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: [
        'src/**/*.js', 'src/**/*.jsx', 'src/*.jsx', 'src/*.js',
      ],
    }),
    chunkSplitPlugin({
      customSplitting: {
        // `react` and `react-dom` will be bundled together in the `react-vendor` chunk (with their dependencies, such as object-assign)
        'react-vendor': ['react', 'react-dom'],
        utils: [/src\/utils/, /src\/constant/],
        'firebase-vendor': ['firebase/app', 'firebase/auth', 'firebase/analytics', 'firebase/app-check'],
        firestore: ['firebase/firestore'],
        'framer-motion': ['framer-motion'],
      }
    }),
    visualizer(),
    nodeResolve()
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    format: 'iife'
  }
});
