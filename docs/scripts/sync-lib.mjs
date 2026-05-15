import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const libraryRoot = path.resolve(__dirname, '../../src');
const vendorRoot = path.resolve(__dirname, '../vendor/themejs');

if (!fs.existsSync(libraryRoot)) {
  console.error('Library source not found at', libraryRoot);
  process.exit(1);
}

fs.rmSync(vendorRoot, { recursive: true, force: true });
fs.mkdirSync(vendorRoot, { recursive: true });

for (const entry of fs.readdirSync(libraryRoot)) {
  if (entry.endsWith('.ts') || entry.endsWith('.tsx')) {
    fs.copyFileSync(path.join(libraryRoot, entry), path.join(vendorRoot, entry));
  }
}

console.log('Synced ThemeJS sources into docs/vendor/themejs');
