import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import ObjFileImport from '../src/vite';

export default defineConfig({
  plugins: [Inspect(), ObjFileImport()],
});
