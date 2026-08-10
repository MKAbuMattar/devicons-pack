import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {getIcon, getIconPath, metadata} from '../src/index';

assert.ok(metadata.count > 500, 'metadata has all icons');
assert.equal(metadata.icons.length, metadata.count);
assert.deepEqual(metadata.styles, [
  'original',
  'plain',
  'line',
  'original-wordmark',
  'plain-wordmark',
  'line-wordmark',
]);

assert.equal(getIcon('javascript')?.name, 'Javascript');
assert.equal(
  getIconPath('javascript', 'original'),
  '@devicons-pack/svg/icons/original/javascript.svg',
);

const svg = fs.readFileSync(
  path.resolve(import.meta.dirname, '../icons/original/javascript.svg'),
  'utf8',
);
assert.ok(svg.startsWith('<svg'), 'icon file is an svg');
assert.ok(svg.includes('viewBox='), 'viewBox preserved');

console.log('@devicons-pack/svg smoke test passed');
