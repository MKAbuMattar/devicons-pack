import assert from 'node:assert/strict';
import {h} from 'preact';
import {render} from 'preact-render-to-string';
// @ts-expect-error generated at build time
import {Javascript} from '../dist/original/index.js';
// @ts-expect-error generated at build time
import NodejsWordmark from '../dist/plain-wordmark/icons/nodejs.js';

const plain = render(h(Javascript, null));
assert.ok(plain.startsWith('<svg'), 'renders an svg');
assert.ok(plain.includes('viewBox="0 0 128 128"'), 'keeps viewBox');
assert.ok(plain.includes('aria-hidden="true"'), 'decorative by default');

const labeled = render(h(NodejsWordmark, {title: 'JS', class: 'x'}));
assert.ok(labeled.includes('aria-label="JS"'), 'title becomes aria-label');
assert.ok(!labeled.includes('aria-hidden'), 'labeled icon is not hidden');
assert.ok(labeled.includes('class="x"'), 'props pass through');

console.log('@devicons-pack/preact smoke test passed');
