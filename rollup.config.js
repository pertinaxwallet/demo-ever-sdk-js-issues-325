import serve from 'rollup-plugin-serve';
import watchAssets from 'rollup-plugin-watch-assets';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const config = [{
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    name: 'index',
    format: 'iife'
  },
  plugins: [
    copy({
      targets: [
        { src: 'src/*.html', dest: 'dist/' },
        { src: './node_modules/@eversdk/lib-web/eversdk.wasm', dest: 'dist/' }
      ]
    }),
    commonjs(),
    !production && watchAssets({ assets: ['src'] }),
    !production && serve('dist') && livereload({watch: 'dist', verbose: false}),
    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
    resolve({ browser: true }),
  ],
  watch: {
    clearScreen: false
  }
}
];

export default config;
