#!/usr/bin/env node
/**
 * Deterministic Static Output Generator for Praise Techy Portfolio
 * Assembles production distribution in dist/ excluding development files,
 * logs, authoring templates, and local server tooling.
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

// Whitelisted top-level HTML pages for production dist
const ROOT_HTML_FILES = [
  'index.html',
  'about.html',
  'contact.html',
  'pricing.html',
  'style-guide.html',
  'work.html',
  '404.html'
];

// Whitelisted static asset directories
const ASSET_DIRS = [
  'css',
  'js',
  'images',
  'fonts'
];

// Cloudflare routing, SEO and security config files
const CONFIG_FILES = [
  '_headers',
  '_redirects',
  'sitemap.xml',
  'robots.txt'
];

function cleanDist() {
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true, force: true });
  }
  fs.mkdirSync(DIST, { recursive: true });
}

function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
}

function copyDir(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      if (entry.name === '.DS_Store' || entry.name === 'Thumbs.db') continue;
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function build() {
  console.log('[build] Cleaning dist/...');
  cleanDist();

  console.log('[build] Copying root HTML files...');
  for (const file of ROOT_HTML_FILES) {
    const src = path.join(ROOT, file);
    if (fs.existsSync(src)) {
      copyFile(src, path.join(DIST, file));
    } else {
      console.warn(`[build] Warning: ${file} not found in root.`);
    }
  }

  console.log('[build] Copying asset directories...');
  for (const dir of ASSET_DIRS) {
    const srcDir = path.join(ROOT, dir);
    if (fs.existsSync(srcDir)) {
      copyDir(srcDir, path.join(DIST, dir));
    }
  }

  console.log('[build] Copying work case studies (excluding authoring templates)...');
  const workSrc = path.join(ROOT, 'work');
  const workDest = path.join(DIST, 'work');
  if (fs.existsSync(workSrc)) {
    fs.mkdirSync(workDest, { recursive: true });
    const workEntries = fs.readdirSync(workSrc, { withFileTypes: true });
    for (const entry of workEntries) {
      if (entry.isFile() && entry.name.endsWith('.html')) {
        // Exclude authoring template
        if (entry.name === 'template.html') {
          console.log('  [exclude] work/template.html (authoring template omitted from dist)');
          continue;
        }
        copyFile(path.join(workSrc, entry.name), path.join(workDest, entry.name));
      }
    }
  }

  console.log('[build] Copying Cloudflare configuration files...');
  for (const file of CONFIG_FILES) {
    const src = path.join(ROOT, file);
    if (fs.existsSync(src)) {
      copyFile(src, path.join(DIST, file));
    }
  }

  console.log('[build] Build complete! Production bundle generated in dist/\n');
}

build();
