/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: true,
			strict: true
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		}
	}
};