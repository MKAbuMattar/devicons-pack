import assert from 'node:assert/strict';
// @ts-expect-error generated at build time
import {Javascript} from '../dist/original/index.js';
// @ts-expect-error generated at build time
import NodejsWordmark from '../dist/plain-wordmark/icons/nodejs.js';
// lit's node build ships DOM shims, so this works without a browser
import {DevIconElement, iconSvg, register} from '../src/index';

register(Javascript, NodejsWordmark);

const plain = iconSvg(Javascript);
assert.ok(plain.startsWith('<svg'), 'renders an svg');
assert.ok(plain.includes('aria-hidden="true"'), 'decorative by default');

const labeled = iconSvg(NodejsWordmark, 'JS "1"');
assert.ok(labeled.includes('aria-label="JS &quot;1&quot;"'), 'label escaped');

assert.equal(typeof DevIconElement, 'function', 'element class exports');
assert.ok(
  Object.hasOwn(DevIconElement.properties, 'name'),
  'reactive properties declared',
);

console.log('@devicons-pack/lit smoke test passed');
