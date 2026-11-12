import { copyFile, mkdir } from "node:fs/promises"

await mkdir("dist/components", { recursive: true })
await Promise.all([
  copyFile("index.js", "dist/index.js"),
  copyFile("components/index.js", "dist/components/index.js"),
  copyFile("index.d.ts", "dist/index.d.ts"),
  copyFile("components/index.d.ts", "dist/components/index.d.ts"),
])
