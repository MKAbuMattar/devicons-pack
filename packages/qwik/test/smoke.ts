import assert from 'node:assert/strict';
// @ts-expect-error generated at build time
import {Javascript} from '../dist/original/index.js';
// @ts-expect-error generated at build time
import NodejsWordmark from '../dist/plain-wordmark/icons/nodejs.js';

const plain = Javascript({}) as {type: unknown; props: Record<string, unknown>};
assert.equal(plain.type, 'svg', 'renders an svg jsx node');
assert.equal(plain.props.viewBox, '0 0 128 128', 'keeps viewBox');
assert.equal(plain.props['aria-hidden'], 'true', 'decorative by default');
assert.ok(
  String(plain.props.dangerouslySetInnerHTML).includes('<path'),
  'body present',
);

const labeled = NodejsWordmark({title: 'Javascript', class: 'x'}) as {
  props: Record<string, unknown>;
};
assert.equal(
  labeled.props['aria-label'],
  'Javascript',
  'title becomes aria-label',
);
assert.equal(
  labeled.props['aria-hidden'],
  undefined,
  'labeled icon not hidden',
);
assert.equal(labeled.props.class, 'x', 'props pass through');

console.log('@devicons-pack/qwik smoke test passed');
