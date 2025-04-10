/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: true,
			strict: true,
			paths: {
				base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
			},
			prerender: {
				default: true
			}
		})
	}
};
