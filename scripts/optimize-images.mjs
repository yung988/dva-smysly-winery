import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const projectRoot = process.cwd()

const targets = [
  // Hero
  "public/vineyard2.JPG",
  // Sklep gallery
  "public/images/Sklep/sklep1.jpg",
  "public/images/Sklep/sklep2.jpg",
  "public/images/Sklep/sklep3.jpg",
  // Degustace header
  "public/images/degustace/degustace.png",
  // About main image (rename to safer slug)
  { src: "public/images/about/about hlavni.JPG", dest: "public/images/about/about-hlavni.webp" },
  // Grapes dark for /vina header
  "public/grapes-dark.jpeg",
  // Bottle images (png preferred transparency)
  "public/images/vina/frizzante_2024.png",
  "public/images/vina/ryzlink_2024.png",
  "public/images/vina/sauvignon_2024.png",
  "public/images/vina/svatovavrinecke_2023.png",
  "public/images/vina/svatovavrinecke_rose_2024.png",
  "public/images/vina/tramin_2024.png",
  "public/images/vina/veltlin_2024.png",
]

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
}

async function toWebP(inputPath, outputPath) {
  const maxWidth = 1600
  const image = sharp(inputPath)
  const metadata = await image.metadata()
  const width = metadata.width && metadata.width > maxWidth ? maxWidth : undefined
  await sharp(inputPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(outputPath)
}

async function main() {
  const results = []
  for (const entry of targets) {
    const srcRel = typeof entry === "string" ? entry : entry.src
    const destRel = typeof entry === "string" ? srcRel.replace(/\.[^.]+$/, ".webp") : entry.dest
    const srcAbs = path.join(projectRoot, srcRel)
    const destAbs = path.join(projectRoot, destRel)
    try {
      await ensureDir(destAbs)
      await toWebP(srcAbs, destAbs)
      results.push({ ok: true, src: srcRel, dest: destRel })
    } catch (err) {
      results.push({ ok: false, src: srcRel, error: String(err) })
    }
  }
  console.table(results)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
