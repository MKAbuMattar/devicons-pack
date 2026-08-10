import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve(import.meta.dirname, '../dist');

for (const set of [
  'original',
  'plain',
  'line',
  'original-wordmark',
  'plain-wordmark',
  'line-wordmark',
]) {
  const col = JSON.parse(
    fs.readFileSync(path.join(dist, `${set}.json`), 'utf8'),
  );
  assert.equal(col.prefix, `devicons-pack-${set}`);
  const slugs = Object.keys(col.icons);
  assert.ok(slugs.length > 50, `${set} has icons`);
  const icon = col.icons[slugs[0]];
  assert.ok(icon.body.includes('<'), 'body is inner svg');
  assert.ok(icon.width > 0 && icon.height > 0, 'sized from viewBox');
}

const {sets, prefix} = await import('../dist/index.js');
assert.deepEqual(
  [...sets],
  [
    'original',
    'plain',
    'line',
    'original-wordmark',
    'plain-wordmark',
    'line-wordmark',
  ],
);
assert.equal(prefix('original'), 'devicons-pack-original');

console.log('@devicons-pack/iconify smoke test passed');
