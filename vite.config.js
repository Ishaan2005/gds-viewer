import { defineConfig } from 'vite';

export default defineConfig({
  base: '/gds-viewer/',

  plugins: [
    {
      name: 'watch-gds-files',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.gds')) {
          server.ws.send({
            type: 'custom',
            event: 'my-gds-change',
            data: {},
          });
        }
      },
    },
  ],

  worker: {
    format: 'es',
  },
});
