const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

// Top-level JSX + HTML entry — copied directly.
const staticFiles = [
  "index.html",
  "bium-icons.jsx",
  "bium-shared.jsx",
  "bium-screens.jsx",
  "bium-app.jsx",
];

// Asset directories — copied recursively, preserving structure.
// `public/` holds binary assets (logo.png, splash, etc.) that are
// referenced from index.html / *.jsx via `public/<name>`.
const staticDirs = ["public"];

function copyDirRecursive(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return 0;
  fs.mkdirSync(destDir, { recursive: true });
  let count = 0;
  for (const name of fs.readdirSync(srcDir)) {
    const src = path.join(srcDir, name);
    const dst = path.join(destDir, name);
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
      count += copyDirRecursive(src, dst);
    } else {
      fs.copyFileSync(src, dst);
      count += 1;
    }
  }
  return count;
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of staticFiles) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

let assetCount = 0;
for (const dir of staticDirs) {
  assetCount += copyDirRecursive(path.join(root, dir), path.join(dist, dir));
}

console.log(`Built ${staticFiles.length} static files + ${assetCount} assets into dist/`);
