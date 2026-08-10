import assert from 'node:assert/strict';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
// @ts-expect-error generated at build time
import {Javascript} from '../dist/original/index.js';
// @ts-expect-error generated at build time
import NodejsWordmark from '../dist/plain-wordmark/icons/nodejs.js';

const flat = renderToStaticMarkup(createElement(Javascript));
assert.ok(flat.startsWith('<svg'), 'renders an svg');
assert.ok(flat.includes('viewBox="0 0 128 128"'), 'keeps viewBox');
assert.ok(flat.includes('aria-hidden="true"'), 'decorative by default');

const labeled = renderToStaticMarkup(
  createElement(NodejsWordmark, {title: 'JS', className: 'x'}),
);
assert.ok(labeled.includes('aria-label="JS"'), 'title becomes aria-label');
assert.ok(!labeled.includes('aria-hidden'), 'labeled icon is not hidden');
assert.ok(labeled.includes('class="x"'), 'props pass through');

console.log('@devicons-pack/react smoke test passed');
