import assert from 'node:assert/strict';
// @ts-expect-error generated at build time
import {Javascript} from '../dist/original/index.js';
// @ts-expect-error generated at build time
import NodejsWordmark from '../dist/plain-wordmark/icons/nodejs.js';
import devIcon, {iconHtml, register} from '../src/index';

register(Javascript, NodejsWordmark);

const plain = iconHtml('javascript');
assert.ok(plain.startsWith('<svg'), 'renders an svg');
assert.ok(plain.includes('aria-hidden="true"'), 'decorative by default');

const labeled = iconHtml('nodejs', 'plain-wordmark', 'JS "1"');
assert.ok(labeled.includes('aria-label="JS &quot;1&quot;"'), 'label escaped');
assert.equal(iconHtml('does-not-exist' as never), '', 'unknown icon is empty');

// plugin wiring with a fake Alpine
const calls: string[] = [];
devIcon({
  magic: (name: string) => calls.push(`magic:${name}`),
  directive: (name: string) => calls.push(`directive:${name}`),
});
assert.deepEqual(calls, ['magic:devIcon', 'directive:dev-icon']);

console.log('@devicons-pack/alpine smoke test passed');
