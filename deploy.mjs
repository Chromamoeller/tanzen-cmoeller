import { existsSync, readFileSync } from "node:fs";
import { execSync, execFileSync } from "node:child_process";
import { Client } from "basic-ftp";

// ---- .env laden -------------------------------------------------------
if (!existsSync(".env")) {
  console.error("Fehler: Keine .env-Datei gefunden.");
  console.error("Bitte .env.example nach .env kopieren und FTP-Zugangsdaten eintragen.");
  process.exit(1);
}
for (const line of readFileSync(".env", "utf8").split(/\r?\n/)) {
  const match = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
  if (match && !line.trim().startsWith("#")) {
    process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
  }
}

const { FTP_HOST, FTP_USER, FTP_PASSWORD } = process.env;
const FTP_REMOTE_DIR = process.env.FTP_REMOTE_DIR || "/";
const FTP_SECURE = process.env.FTP_SECURE !== "false";
const FTP_PORT = Number(process.env.FTP_PORT || 21);

if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) {
  console.error("Fehler: FTP_HOST, FTP_USER und FTP_PASSWORD müssen in der .env gesetzt sein.");
  process.exit(1);
}

// ---- Commit-Nachricht -------------------------------------------------
const message = process.argv.slice(2).join(" ").trim();
if (!message) {
  console.error('Fehler: Bitte eine Commit-Nachricht angeben, z.B.:');
  console.error('  npm run deploy -- "kurs B hinzugefügt"');
  process.exit(1);
}

const run = (cmd) => execSync(cmd, { stdio: "inherit" });

// ---- 1. Git -----------------------------------------------------------
console.log("\n[1/3] Git: committen und pushen ...");
const changes = execSync("git status --porcelain").toString().trim();
if (changes) {
  run("git add -A");
  execFileSync("git", ["commit", "-m", message], { stdio: "inherit" });
} else {
  console.log("Keine Änderungen zu committen – überspringe Commit.");
}
run("git push");

// ---- 2. Build ---------------------------------------------------------
console.log("\n[2/3] Build: npm run build ...");
run("npm run build");

// ---- 3. FTP-Upload ----------------------------------------------------
console.log(`\n[3/3] Upload: dist/ -> ${FTP_HOST}${FTP_REMOTE_DIR} ...`);
const client = new Client();
client.ftp.verbose = false;
try {
  await client.access({
    host: FTP_HOST,
    port: FTP_PORT,
    user: FTP_USER,
    password: FTP_PASSWORD,
    secure: FTP_SECURE,
  });
  await client.ensureDir(FTP_REMOTE_DIR);
  await client.uploadFromDir("dist");
  console.log("\nFertig! Alle Dateien aus dist/ wurden hochgeladen.");
} catch (err) {
  console.error("\nFTP-Upload fehlgeschlagen:", err.message);
  process.exitCode = 1;
} finally {
  client.close();
}
