
import sharp from 'sharp'

import fs from 'fs'
import path from 'path'

const relativePath = process.argv.at(-1) || ''

export function getImageNames(relativePath: string, ext: string = 'jpeg') {
  const publicDir = path.join(process.cwd(), 'public')
  const imagesDir = path.join(publicDir, relativePath)
  
  try {
    return fs.readdirSync(imagesDir)
      .filter(file => RegExp(`.${ext}$`).test(file))
      .map(file => file.slice(0, -`.${ext}`.length))
  } catch (error) {
    console.error('Error reading public directory:', error)
    return []
  }
}

async function webpify(relativePath: string, ext: string = 'jpeg', fileName: string) {
  const publicDir = path.join(process.cwd(), 'public')
  const imagesDir = path.join(publicDir, relativePath)

  const inputFileName = path.join(imagesDir, `${fileName}.${ext}`)
  const outputFileName = path.join(imagesDir, `111${fileName}.webp`)
  try {
    await sharp(inputFileName)
      .resize({ width: 1280, height: 624, fit: 'inside' })
      .webp({ quality: 75 })
      .toFile(outputFileName)
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

const images = getImageNames(relativePath, 'jpeg')

console.log(images)

const webpifyHomeImages = webpify.bind(null, relativePath, 'jpeg')

Promise.all(images.map(webpifyHomeImages))

// for await (const image of images) {
//   await webpify(image)
// }

// const stringify = (input: Record<string, string>) => {
//   const rows = Object.entries(input).map(([key, value]) => {
//     const reg = /^[a-zA-Z-_][a-zA-Z0-9-_]*$/
//     key = reg.test(key) ? key : `'${key}'`
//     return `${key}: '${value}'`
//   })

//   return `{\n${rows.join(',\n')}\n}`
// }

// // Сохраняем результат в файл
// fs.writeFileSync(
//   'base64.ts',
//   `import type { Base64 } from '@/lib/images'\n\nconst base64: Base64 = ${stringify(base64)}\n\nexport default base64\n`,
// )
    
