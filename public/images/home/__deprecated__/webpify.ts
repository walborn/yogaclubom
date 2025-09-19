import sharp from 'sharp'

import images from '@/lib/images'
import fs from 'fs'

const base64: Record<string, string> = {}

async function webpify(inputPath: string) {
  try {
    await sharp(`${inputPath}.jpeg`) // входящий файл (inputPath)
      .resize({ width: 1280, height: 624, fit: 'inside' })
      .webp({ quality: 75 }) // настройка качества
      .toFile(`111${inputPath}.webp`) // выходящий файл (inputPath)
    
    // const buffer = await sharp(`${inputPath}.jpeg`)
    //   .resize({ width: 320, height: 156, fit: 'inside' })
    //   .toBuffer()

    // // Конвертируем в base64
    // base64[inputPath] = `data:image/jpeg;base64,${buffer.toString('base64')}`
    
    // console.log(`✅ BlurDataURL сгенерирован в файл ${inputPath}.base64`)
    
    // return base64
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

for await (const image of images) {
  await webpify(image)
}

const stringify = (input: Record<string, string>) => {
  const rows = Object.entries(input).map(([key, value]) => {
    const reg = /^[a-zA-Z-_][a-zA-Z0-9-_]*$/
    key = reg.test(key) ? key : `'${key}'`
    return `${key}: '${value}'`
  })

  return [
    '{',
    ...rows.map(i => `  ${i},`),
    '}',
  ].join('\n')
}

// Сохраняем результат в файл
fs.writeFileSync(
  'base64.ts',
  `import type { Base64 } from '@/lib/images'\n\nconst base64: Base64 = ${stringify(base64)}\n\nexport default base64\n`,
)
    
