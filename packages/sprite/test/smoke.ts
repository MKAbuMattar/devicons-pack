import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {spriteHref, spritePath} from '../src/index';

const dist = path.resolve(import.meta.dirname, '../dist');

const sprite = fs.readFileSync(path.join(dist, 'original.svg'), 'utf8');
assert.ok(sprite.startsWith('<svg'), 'sprite is an svg');
assert.ok(
  sprite.includes('<symbol id="javascript" viewBox="0 0 128 128">'),
  'javascript symbol',
);
assert.ok((sprite.match(/<symbol /g) ?? []).length > 90, 'all symbols present');

assert.equal(
  spriteHref('/sprites/original.svg', 'javascript'),
  '/sprites/original.svg#javascript',
);
assert.equal(spritePath('original'), '@devicons-pack/sprite/original.svg');

console.log('@devicons-pack/sprite smoke test passed');
