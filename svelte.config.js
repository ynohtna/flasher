import adaptstatic from '@sveltejs/adapter-static';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

function readVersion() {
    const file = fileURLToPath(new URL('package.json', import.meta.url));
    const json = readFileSync(file, 'utf8');
    const pkg = JSON.parse(json);
    return pkg.version;
}

const repo = "/flasher";
const version = readVersion();

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
