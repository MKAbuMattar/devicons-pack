// JIT fallback so the partial-Ivy declarations evaluate outside Angular's linker
import '@angular/compiler';
import assert from 'node:assert/strict';
// @ts-expect-error generated at build time
import {Javascript} from '../dist/original/index.js';
// @ts-expect-error generated at build time
import NodejsWordmark from '../dist/plain-wordmark/icons/nodejs.js';
// compiled FESM — partial-Ivy output importable in plain node
// @ts-expect-error built by ng-packagr
import {
  DevIconDirective,
  iconHtml,
  register,
} from '../lib/fesm2022/devicons-pack-angular.mjs';

register(Javascript, NodejsWordmark);

const plain = iconHtml('javascript');
assert.ok(plain.startsWith('<svg'), 'renders an svg');
assert.ok(plain.includes('aria-hidden="true"'), 'decorative by default');

const labeled = iconHtml('nodejs', 'plain-wordmark', 'JS "1"');
assert.ok(labeled.includes('aria-label="JS &quot;1&quot;"'), 'label escaped');
assert.equal(iconHtml('nope'), '', 'unknown icon is empty');

assert.equal(typeof DevIconDirective, 'function', 'directive exports');
// partial-Ivy compilation marker consumed by the Angular linker
assert.ok(
  'ɵdir' in DevIconDirective || 'ɵfac' in DevIconDirective,
  'Ivy partial compilation present',
);

console.log('@devicons-pack/angular smoke test passed');
