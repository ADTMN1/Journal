// Removes the flat gray background from the logo in lib/assets.ts, leaving the
// black artwork untouched, and writes the processed data URI back.
// Usage: node scripts/remove-logo-bg.mjs   (idempotent: no-op if already transparent)
import fs from "node:fs";
import { PNG } from "pngjs";

const ASSETS = new URL("../lib/assets.ts", import.meta.url);
const KEY_INNER = 14; // distance <= this becomes fully transparent
const KEY_OUTER = 45; // distance >= this stays fully opaque (soft edge between)

const ts = fs.readFileSync(ASSETS, "utf8");
const match = ts.match(/export const logoSrc = "(data:image\/png;base64,[^"]+)"/);
if (!match) {
  console.error("logoSrc not found in lib/assets.ts");
  process.exit(1);
}
const png = PNG.sync.read(Buffer.from(match[1].split(",")[1], "base64"));
const { data, width, height } = png;

// Sample the background from a 5x5 patch at each corner (artwork never reaches them).
let sr = 0, sg = 0, sb = 0, n = 0;
const patches = [
  [0, 0], [width - 5, 0], [0, height - 5], [width - 5, height - 5],
];
for (const [px, py] of patches) {
  for (let dy = 0; dy < 5; dy++) {
    for (let dx = 0; dx < 5; dx++) {
      const i = ((py + dy) * width + (px + dx)) * 4;
      sr += data[i]; sg += data[i + 1]; sb += data[i + 2]; n++;
    }
  }
}
const [bgR, bgG, bgB] = [sr / n, sg / n, sb / n];
console.log(`background sampled as rgb(${bgR.toFixed(1)}, ${bgG.toFixed(1)}, ${bgB.toFixed(1)})`);

let cleared = 0, feathered = 0;
for (let i = 0; i < data.length; i += 4) {
  const dist = Math.hypot(data[i] - bgR, data[i + 1] - bgG, data[i + 2] - bgB);
  if (dist <= KEY_INNER) {
    data[i + 3] = 0;
    cleared++;
  } else if (dist < KEY_OUTER) {
    const k = (dist - KEY_INNER) / (KEY_OUTER - KEY_INNER);
    const a = Math.round(k * 255);
    if (a < data[i + 3]) { data[i + 3] = a; feathered++; }
  }
}

const out = PNG.sync.write(png, { colorType: 6 });
const uri = `data:image/png;base64,${out.toString("base64")}`;
fs.writeFileSync(ASSETS, ts.replace(match[1], uri));
console.log(`cleared ${cleared}px, feathered ${feathered}px of ${width * height} -> lib/assets.ts`);
