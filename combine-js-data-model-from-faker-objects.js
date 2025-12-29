const fs = require("fs");
const path = require("path");

const startDir = process.argv[2] 
  ? path.resolve(process.argv[2])
  : __dirname;

const outputFile = path.join(__dirname, "combined.txt");

// folders to skip
const IGNORE_DIRS = new Set(["node_modules", ".git"]);

async function combineFiles(rootDir) {
  let output = "";

  async function walk(dir) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      // skip ignored dirs
      if (entry.isDirectory()) {
        if (
          IGNORE_DIRS.has(entry.name) ||
          entry.name.startsWith(".")
        ) {
          continue;
        }
        await walk(fullPath);
      } 
      else if (entry.isFile()) {
        try {
          const content = await fs.promises.readFile(fullPath, "utf8");
          output += `\n\n===== FILE: ${path.relative(rootDir, fullPath)} =====\n\n`;
          output += content;
        } catch (err) {
          console.warn(`Skipping unreadable file: ${fullPath}`);
        }
      }
    }
  }

  await walk(rootDir);

  await fs.promises.writeFile(outputFile, output, "utf8");

  console.log(`Done! Combined content saved to:\n${outputFile}`);
  console.log(`Scanned from:\n${rootDir}`);
}

combineFiles(startDir).catch(err => {
  console.error("Error:", err);
});
