/**
 * Syncs icons from devicons/devicon into assets/.
 *
 * Sparse-clones only icons/ + devicon.json, copies the six SVG variants per
 * icon (original, plain, line, and their -wordmark forms — availability is
 * sparse per icon), optimizes with svgo, and rebuilds assets/<variant>/.
 * Display names, tags, and altnames come from upstream devicon.json.
 *
 * svgo ID prefixes are derived from the slug (deterministic), so re-running
 * sync only diffs icons that actually changed upstream.
 */
import {execSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {type Config, optimize} from 'svgo';

const ROOT = path.resolve(import.meta.dirname, '../..');
const TMP = path.join(ROOT, '.tmp/upstream');
const ASSETS = path.join(ROOT, 'assets');

const UPSTREAM = 'https://github.com/devicons/devicon.git';
// master feeds the stable channel (main); develop feeds the beta channel (next)
const BRANCH = process.env.SYNC_BRANCH ?? 'master';
const VARIANTS = [
  'original',
  'plain',
  'line',
  'original-wordmark',
  'plain-wordmark',
  'line-wordmark',
] as const;

const svgoConfig = (slug: string): Config => ({
  plugins: [
    'preset-default',
    'removeTitle',
    'convertStyleToAttrs',
    'cleanupIds',
    {
      name: 'prefixIds',
      params: {delim: '', prefix: `di-${slug}-`},
    },
    'removeDimensions',
  ],
});

type DeviconEntry = {
  name: string;
  altnames?: string[];
  tags?: string[];
};

const titleCase = (slug: string): string =>
  slug
    .split('-')
    .map((w) => (w[0] ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');

const main = async (): Promise<void> => {
  fs.rmSync(TMP, {recursive: true, force: true});
  console.log(
    `Cloning ${UPSTREAM}@${BRANCH} (sparse: icons/ + devicon.json)...`,
  );
  execSync(
    `git clone --depth=1 -b ${BRANCH} --filter=blob:none --sparse ${UPSTREAM} ${TMP}`,
    {stdio: 'inherit'},
  );
  execSync(
    `git -C ${TMP} sparse-checkout set --no-cone '/icons/**' '/devicon.json'`,
    {
      stdio: 'inherit',
    },
  );

  const upstream: DeviconEntry[] = JSON.parse(
    fs.readFileSync(path.join(TMP, 'devicon.json'), 'utf8'),
  );
  const bySlug = new Map(upstream.map((e) => [e.name, e]));

  for (const variant of VARIANTS) {
    fs.rmSync(path.join(ASSETS, variant), {recursive: true, force: true});
    fs.mkdirSync(path.join(ASSETS, variant), {recursive: true});
  }

  const names: Record<string, string> = {};
  const extras: Record<string, {tags: string[]; altnames: string[]}> = {};
  let written = 0;

  for (const slug of fs.readdirSync(path.join(TMP, 'icons')).sort()) {
    const dir = path.join(TMP, 'icons', slug);
    if (!fs.statSync(dir).isDirectory()) continue;

    for (const variant of VARIANTS) {
      const file = path.join(dir, `${slug}-${variant}.svg`);
      if (!fs.existsSync(file)) continue;
      const raw = fs.readFileSync(file, 'utf8');
      const {data} = optimize(raw, svgoConfig(slug));
      fs.writeFileSync(path.join(ASSETS, variant, `${slug}.svg`), data);
      written++;
    }

    const entry = bySlug.get(slug);
    names[slug] = titleCase(slug);
    extras[slug] = {
      tags: entry?.tags ?? [],
      altnames: entry?.altnames ?? [],
    };
  }

  fs.writeFileSync(
    path.join(ASSETS, 'names.json'),
    `${JSON.stringify(names, null, 2)}\n`,
  );
  fs.writeFileSync(
    path.join(ASSETS, 'extras.json'),
    `${JSON.stringify(extras, null, 2)}\n`,
  );
  console.log(`Wrote ${written} optimized SVGs to assets/`);
  if (written < 600) {
    throw new Error(
      `suspiciously few icons (${written}) — upstream layout may have changed`,
    );
  }
  fs.rmSync(TMP, {recursive: true, force: true});
};

main();
