import { createUnplugin } from 'unplugin';
import fs from 'fs/promises';

/**
 * Bundler-agnostic plugin for importing .obj files as strings.
 */
export default createUnplugin(() => {
  const objRegex = /\.obj\??/;

  return {
    name: 'unplugin-obj',
    resolveId(id) {
      if (id.match(objRegex)) {
        return id;
      }
    },
    async load(id) {
      if (!id.match(objRegex)) {
        return;
      }

      const [path] = id.split('?', 2);

      const obj = await fs.readFile(path, 'utf-8');

      return `export default ${JSON.stringify(obj)};`;
    },
  };
});
