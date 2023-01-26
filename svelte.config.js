import adaptstatic from '@sveltejs/adapter-static';

const repo = "/flasher";
const version = "0.1";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
        adapter: adaptstatic({
            fallback: `${repo}/index.html`,
        }),
        appDir: 'app_',
        paths: {
            base: repo,
        },
        version: {
            name: version,
        },
	}
};

export default config;
export {
    repo,
    version,
};
