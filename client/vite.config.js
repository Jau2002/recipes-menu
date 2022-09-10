import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
	const generateScopedName =
		mode === 'production'
			? '[hash:base64:2]'
			: '[name]__[local]__[hash:base64:2]';
	process.env = {
		...process.env,
		...loadEnv(mode, process.cwd()),
	};
	return defineConfig({
		publicDir: 'assets',
		base: '/',
		plugins: [react()],
		server: {
			host: true,
			open: true,
			port: 3000,
		},
		css: {
			modules: {
				localsConvention: 'camelCase',
				generateScopedName,
			},
		},
	});
};
