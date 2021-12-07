import { Options } from 'tsup';

export default <Options>{
  splitting: true,
  clean: true,
  entryPoints: ['src/*.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  onSuccess: 'npm run build:fix',
};
