import assert from 'node:assert/strict';
import {Window} from 'happy-dom';

const window = new Window();
Object.assign(globalThis, {
  HTMLElement: window.HTMLElement,
  customElements: window.customElements,
  document: window.document,
});

const {defineDevIcon, register} = await import('../dist/index.js');
// @ts-expect-error generated at build time
const {Javascript} = await import('../dist/original/index.js');
// @ts-expect-error generated at build time
const {default: NodejsWordmark} = await import(
  '../dist/plain-wordmark/icons/nodejs.js'
);

assert.equal(Javascript.slug, 'javascript');
assert.equal(Javascript.style, 'original');

defineDevIcon();
register(Javascript, NodejsWordmark);

const el = document.createElement('dev-icon');
el.setAttribute('name', 'javascript');
document.body.appendChild(el);
assert.ok(el.innerHTML.includes('<svg'), 'renders registered icon by name');
assert.ok(el.innerHTML.includes('aria-hidden'), 'decorative by default');

el.setAttribute('variant', 'plain-wordmark');
el.setAttribute('name', 'nodejs');
el.setAttribute('label', 'JS');
assert.ok(el.innerHTML.includes('aria-label="JS"'), 'label becomes aria-label');

// @ts-expect-error property assignment on custom element
el.icon = Javascript;
assert.ok(el.innerHTML.includes('viewBox'), 'icon property renders directly');

console.log('@devicons-pack/web-components smoke test passed');
