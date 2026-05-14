const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const staticFiles = [
  "index.html",
  "bium-icons.jsx",
  "bium-shared.jsx",
  "bium-screens.jsx",
  "bium-file-scanner.jsx",
  "bium-app.jsx",
];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of staticFiles) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

console.log(`Built ${staticFiles.length} static files into dist/`);
