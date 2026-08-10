import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// react-native-svg needs a native runtime, so this asserts the generated
// output instead of rendering. The core compiles under tsc in CI.
const dist = path.resolve(import.meta.dirname, '../dist');

const rocket = fs.readFileSync(
  path.join(dist, 'original/icons/javascript.js'),
  'utf8',
);
assert.ok(
  rocket.includes("createDevIcon} from '../../core.js'"),
  'imports core',
);
assert.ok(rocket.includes('createDevIcon("Javascript"'), 'named factory call');
assert.ok(rocket.includes('<svg'), 'carries full svg xml');
assert.ok(rocket.includes('export default Javascript'), 'default export');

const dts = fs.readFileSync(
  path.join(dist, 'original/icons/javascript.d.ts'),
  'utf8',
);
assert.ok(dts.includes('DevIconComponent'), 'typed');

const core = fs.readFileSync(path.join(dist, 'core.js'), 'utf8');
assert.ok(core.includes('react-native-svg'), 'core built');

const index = fs.readFileSync(path.join(dist, 'plain/index.js'), 'utf8');
assert.ok(index.split('\n').length > 90, 'barrel covers all icons');

console.log('@devicons-pack/react-native smoke test passed');
