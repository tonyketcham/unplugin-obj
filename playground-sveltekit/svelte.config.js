import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import ObjFileImport from 'unplugin-obj/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [ObjFileImport()],
			ssr: {
				noExternal: ['three']
			}
		}
	}
};

export default config;
