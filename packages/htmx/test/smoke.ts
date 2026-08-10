import assert from 'node:assert/strict';
import {devIconHandler, iconHtml} from '../src/index';

const svg = await iconHtml('javascript');
assert.ok(svg.startsWith('<svg'), 'serves an svg fragment');
assert.ok(svg.includes('aria-hidden="true"'), 'decorative by default');

const labeled = await iconHtml('nodejs', 'plain-wordmark', 'JS "1"');
assert.ok(labeled.includes('aria-label="JS &quot;1&quot;"'), 'label escaped');

const handler = devIconHandler();
const call = async (url: string) => {
  const headers: Record<string, string> = {};
  let body = '';
  let statusCode = 200;
  await handler(
    {url} as never,
    {
      setHeader: (k: string, v: string) => {
        headers[k] = v;
      },
      end: (chunk?: string) => {
        body = chunk ?? '';
      },
      get statusCode() {
        return statusCode;
      },
      set statusCode(v: number) {
        statusCode = v;
      },
    } as never,
  );
  return {statusCode, headers, body};
};

const ok = await call('/devicons/original/javascript?label=JS');
assert.equal(ok.statusCode, 200);
assert.ok(ok.body.includes('aria-label="JS"'), 'handler serves labeled svg');
assert.ok(ok.headers['Cache-Control']?.includes('immutable'), 'cacheable');

const missing = await call('/devicons/original/not-a-real-icon');
assert.equal(missing.statusCode, 404, 'unknown slug is 404');

const traversal = await call('/devicons/original/..%2F..%2Fpackage');
assert.equal(traversal.statusCode, 404, 'path traversal rejected');

console.log('@devicons-pack/htmx smoke test passed');
