import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const distDir = path.join(repoRoot, "docs", ".vuepress", "dist");
const deployDir = path.join(repoRoot, ".deploy-gh-pages");
const branch = "gh-pages";

const run = (cmd, args, options = {}) =>
  execFileSync(cmd, args, {
    cwd: options.cwd || repoRoot,
    stdio: "inherit",
    ...options,
  });

const ensureDist = () => {
  if (!fs.existsSync(path.join(distDir, "index.html"))) {
    throw new Error("Build output not found. Run npm run build before deploy.");
  }
};

const copyRecursive = (from, to) => {
  fs.cpSync(from, to, { recursive: true });
};

ensureDist();

const remote =
  process.env.GITHUB_PAGES_REMOTE ||
  execFileSync("git", ["config", "--get", "remote.origin.url"], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();

if (!remote) {
  throw new Error("Cannot resolve GitHub remote. Set GITHUB_PAGES_REMOTE or configure remote.origin.url.");
}

fs.rmSync(deployDir, { recursive: true, force: true });
fs.mkdirSync(deployDir, { recursive: true });
copyRecursive(distDir, deployDir);
fs.writeFileSync(path.join(deployDir, ".nojekyll"), "", "utf8");

run("git", ["init"], { cwd: deployDir });
run("git", ["checkout", "-B", branch], { cwd: deployDir });
run("git", ["add", "-A"], { cwd: deployDir });
run("git", ["commit", "-m", "Deploy VuePress site"], { cwd: deployDir });
run("git", ["push", "-f", remote, `${branch}:${branch}`], { cwd: deployDir });

fs.rmSync(deployDir, { recursive: true, force: true });
console.log(`Published ${distDir} to ${remote}/${branch}`);
