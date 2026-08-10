import assert from 'node:assert/strict';
import {renderToString} from '@vue/server-renderer';
import {createSSRApp, h} from 'vue';
// @ts-expect-error generated at build time
import {Javascript} from '../dist/original/index.js';
// @ts-expect-error generated at build time
import NodejsWordmark from '../dist/plain-wordmark/icons/nodejs.js';

const plain = await renderToString(createSSRApp({render: () => h(Javascript)}));
assert.ok(plain.startsWith('<svg'), 'renders an svg');
assert.ok(plain.includes('viewBox="0 0 128 128"'), 'keeps viewBox');
assert.ok(plain.includes('aria-hidden="true"'), 'decorative by default');

const labeled = await renderToString(
  createSSRApp({render: () => h(NodejsWordmark, {title: 'JS', class: 'x'})}),
);
assert.ok(labeled.includes('aria-label="JS"'), 'title becomes aria-label');
assert.ok(!labeled.includes('aria-hidden'), 'labeled icon is not hidden');
assert.ok(labeled.includes('class="x"'), 'attrs pass through');

console.log('@devicons-pack/vue smoke test passed');
