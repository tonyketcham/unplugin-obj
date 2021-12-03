// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import obj from './models/Lowpoly_tree_sample.obj';

console.log(obj);

// display obj on the screen as a pre code tag under the "output" id element
if (document?.getElementById('output')) {
  // @ts-ignore
  document.getElementById('output').innerHTML = `<pre>${obj}</pre>`;
}
// ...optionally parse the obj file and create a mesh from it...
