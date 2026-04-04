import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const INPUT_DIR = path.resolve(process.cwd(), "image-workbench", "input");
const OUTPUT_DIR = path.resolve(process.cwd(), "image-workbench", "output");
const SUPPORTED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const MAX_DIMENSION = 800;
const WEBP_QUALITY = 80;
const MAX_OUTPUT_BYTES = 200 * 1024;

const args = process.argv.slice(2);
const customTargets = args.map((target) => path.resolve(process.cwd(), target));

async function ensureWorkbench() {
  await fs.mkdir(INPUT_DIR, { recursive: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
}

async function collectFiles(targetPath) {
  const stats = await fs.stat(targetPath);

  if (stats.isFile()) {
    return SUPPORTED_EXTENSIONS.has(path.extname(targetPath).toLowerCase()) ? [targetPath] : [];
  }

  const entries = await fs.readdir(targetPath, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(targetPath, entry.name);

      if (entry.isDirectory()) {
        return collectFiles(fullPath);
      }

      return SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase()) ? [fullPath] : [];
    })
  );

  return files.flat();
}

function buildOutputPath(filePath, sourceRoot) {
  const relativePath = path.relative(sourceRoot, filePath);
  const parsed = path.parse(relativePath);
  return path.join(OUTPUT_DIR, parsed.dir, `${parsed.name}.webp`);
}

async function convertFile(filePath, sourceRoot) {
  const outputPath = buildOutputPath(filePath, sourceRoot);
  const outputDir = path.dirname(outputPath);

  await fs.mkdir(outputDir, { recursive: true });

  const transformer = sharp(filePath, { animated: true }).resize({
    width: MAX_DIMENSION,
    height: MAX_DIMENSION,
    fit: "inside",
    withoutEnlargement: true,
  });

  const buffer = await transformer.webp({ quality: WEBP_QUALITY }).toBuffer();

  if (buffer.byteLength > MAX_OUTPUT_BYTES) {
    console.warn(
      `warning: ${path.relative(process.cwd(), filePath)} generated ${(buffer.byteLength / 1024).toFixed(0)}KB, above the old 200KB reference limit`
    );
  }

  await fs.writeFile(outputPath, buffer);

  console.log(
    `${path.relative(process.cwd(), filePath)} -> ${path.relative(process.cwd(), outputPath)} (${(buffer.byteLength / 1024).toFixed(0)}KB)`
  );
}

async function main() {
  await ensureWorkbench();

  const targets = customTargets.length > 0 ? customTargets : [INPUT_DIR];
  const files = (await Promise.all(targets.map((target) => collectFiles(target)))).flat();

  if (files.length === 0) {
    console.error(
      customTargets.length > 0
        ? "No supported image files found in the provided paths."
        : "No supported image files found in image-workbench/input."
    );
    process.exit(1);
  }

  for (const target of targets) {
    const targetStats = await fs.stat(target);
    const targetFiles = files.filter((file) =>
      targetStats.isFile() ? file === target : file.startsWith(target)
    );

    for (const file of targetFiles) {
      await convertFile(file, targetStats.isFile() ? path.dirname(target) : target);
    }
  }
}

await main();
