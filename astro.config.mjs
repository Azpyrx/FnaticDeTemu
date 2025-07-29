// @ts-check

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.hdr'],
    optimizeDeps: {
      exclude: ['@react-three/fiber', '@react-three/drei', '@react-three/rapier']
    }
  }
});