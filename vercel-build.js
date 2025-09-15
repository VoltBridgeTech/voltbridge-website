const { build } = require('vite');
const path = require('path');

async function main() {
  try {
    await build({
      configFile: path.resolve(__dirname, 'vite.config.ts'),
      mode: 'production',
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        minify: 'terser',
        sourcemap: false,
      },
    });
    console.log('Build completed successfully!');
  } catch (e) {
    console.error('Build failed:', e);
    process.exit(1);
  }
}

main();
