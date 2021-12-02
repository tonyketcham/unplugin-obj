# unplugin-obj

<!-- [![NPM version](https://img.shields.io/npm/v/unplugin-obj?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-obj) -->

An [`.obj`](https://en.wikipedia.org/wiki/Wavefront_.obj_file) file import plugin for Vite, Rollup, and Webpack; built with [unplugin](https://github.com/unjs/unplugin). This gives you a sweet and simple way to import an `.obj` file as a string to, for example, parse into a mesh in something like [three.js](https://threejs.org/), or do whatever you want with.

## Usage

Here's a simple example which imports an `.obj` file as a string then logs it to the console.

```ts
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import obj from './models/Lowpoly_tree_sample.obj';

console.log(obj);

// ...optionally parse the obj file and create a mesh from it...
```

> TypeSript & eslint may yell at you for trying to import a module where one doesn't exist without this plugin, so you can ask it to stop using the above comments before the import

## Install

```bash
pnpm i -D unplugin-obj
```

### Vite

```ts
// vite.config.ts
import ObjFileImport from 'unplugin-obj/vite';

export default defineConfig({
  plugins: [ObjFileImport()],
});
```

Example: [`playground/`](./playground/)

### Rollup

```ts
// rollup.config.js
import ObjFileImport from 'unplugin-obj/rollup';

export default {
  plugins: [ObjFileImport()],
};
```

### Webpack

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('unplugin-obj/webpack')()],
};
```

### Nuxt

```ts
// nuxt.config.js
export default {
  buildModules: [['unplugin-obj/nuxt']],
};
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

### Vue CLI

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require('unplugin-obj/webpack')()],
  },
};
```
