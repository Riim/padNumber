import { defineConfig } from 'rolldown';

const libName = 'padNumber';

export default defineConfig(() => {
	return [
		// ['esm', 'js']
		['commonjs', 'js']
	].map(([format, fileExt]) => ({
		input: `src/${libName}.ts`,

		output: {
			file: `dist/${libName}.${fileExt}`,
			format,
			name: libName
		}
	}));
});
