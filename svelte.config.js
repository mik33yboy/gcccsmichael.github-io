import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    typescript: true,
  }),
  kit: {
    alias: {
      $components: path.resolve('./src/components'),
    },
  },
};

export default config;
