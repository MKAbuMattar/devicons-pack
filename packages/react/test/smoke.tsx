import assert from 'node:assert/strict';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {STYLES} from '../../../scripts/generate/svg-lib';
// @ts-expect-error generated at build time
import {Go, Javascript} from '../dist/original/index.js';
// @ts-expect-error generated at build time
import NodejsWordmark from '../dist/plain-wordmark/icons/nodejs.js';
import type {DevIconComponent} from '../src/core';

const svg = renderToStaticMarkup(createElement(Javascript));
assert.ok(svg.startsWith('<svg'), 'renders an svg');
assert.ok(svg.includes('viewBox="0 0 128 128"'), 'keeps viewBox');
assert.ok(svg.includes('aria-hidden="true"'), 'decorative by default');

const labeled = renderToStaticMarkup(
  createElement(NodejsWordmark, {title: 'JS', className: 'x'}),
);
assert.ok(labeled.includes('aria-label="JS"'), 'title becomes aria-label');
assert.ok(!labeled.includes('aria-hidden'), 'labeled icon is not hidden');
assert.ok(labeled.includes('class="x"'), 'props pass through');

// #44: root attrs (xmlns:xlink, xml:space, fill-rule) must not trigger React
// warnings — render every icon of every style and fail on any console.error
const errors: unknown[] = [];
const consoleError = console.error;
console.error = (...args: unknown[]) => errors.push(args);
for (const style of STYLES) {
  for (const Icon of Object.values(await import(`../dist/${style}/index.js`))) {
    renderToStaticMarkup(createElement(Icon as DevIconComponent));
  }
}
console.error = consoleError;
assert.deepEqual(errors, [], 'no React warnings for root svg attrs');
assert.ok(
  renderToStaticMarkup(createElement(Go)).includes(
    'xmlns:xlink="http://www.w3.org/1999/xlink"',
  ),
  'xmlns:xlink is still rendered',
);

console.log('@devicons-pack/react smoke test passed');
