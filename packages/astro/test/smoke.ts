import assert from 'node:assert/strict';
import {loadIconSvg} from '../src/load';

const plain = await loadIconSvg('javascript', 'original');
assert.ok(plain.startsWith('<svg'), 'loads an svg');
assert.ok(plain.includes('viewBox='), 'viewBox preserved');

const labeled = await loadIconSvg('nodejs', 'plain-wordmark', {
  role: 'img',
  'aria-label': 'JS "launch"',
  class: 'x',
});
assert.ok(
  labeled.includes('aria-label="JS &quot;launch&quot;"'),
  'attrs escaped',
);
assert.ok(labeled.includes('class="x"'), 'attrs injected');

console.log('@devicons-pack/astro smoke test passed');
