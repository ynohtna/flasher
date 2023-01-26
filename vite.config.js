import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { repo } from './svelte.config';
import manifest from './webmanifest.config';

const base = repo.endsWith("/") ? repo : repo + "/";

const pwaOptions = {
    base,
    scope: base,
    manifest,
};

const config = {
	plugins: [
        sveltekit(),
        SvelteKitPWA(pwaOptions),
    ],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
