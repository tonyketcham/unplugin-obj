import { createUnplugin } from 'unplugin';

/**
 * Bundler-agnostic plugin for importing .obj files as strings.
 */
export default createUnplugin(() => {
  const objRegex = /\.obj\??/;

  return {
    name: 'unplugin-obj',
    resolveId(id: string) {
      if (id.match(objRegex)) {
        return id;
      }
    },
    transform(src: string, id: string) {
      if (id.endsWith('.obj')) {
        const contents = String.raw`${src}`;

        return {
          code: getCode(contents),
          map: null,
        };
      }
    },
  };
});

function getCode(contents: string) {
  return `
    const obj = \`${contents}\`;
    export default obj;
  `;
}
