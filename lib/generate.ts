import fs from 'fs'
import path from 'path'

export function getImages(relativePath: string, ext: string = 'webp') {
  const publicDir = path.join(process.cwd(), 'public')
  const imagesDir = path.join(publicDir, relativePath)
  
  try {
    return fs.readdirSync(imagesDir)
      .filter(file => RegExp(`.${ext}$`).test(file))
      .map(file => `${relativePath}/${file}`)
  } catch (error) {
    console.error('Error reading public directory:', error)
    return []
  }
}

// home images

const homeImages = getImages('images/home', 'webp')

const homeImagesFile = path.join(process.cwd(), 'data', 'homeImages.ts')

// Сохраняем в JSON файл
console.log(`Generated list of ${homeImages.length} images`)

// Сохраняем результат в файл
fs.writeFileSync(
  homeImagesFile,
  `export const images: string[] = ${JSON.stringify(homeImages, null, 2)}\n\nexport default images\n`,
)


const galleryImages = getImages('images/gallery', 'webp')
galleryImages.sort()

const galleryImagesFile = path.join(process.cwd(), 'data', 'galleryImages.ts')

// Сохраняем в JSON файл
console.log(`Generated list of ${homeImages.length} images`)

// Сохраняем результат в файл
fs.writeFileSync(
  galleryImagesFile,
  `export const images: string[] = [\n${galleryImages.map(image => `  '/${image}',`).join('\n')}\n]\n\nexport default images\n`,
)

