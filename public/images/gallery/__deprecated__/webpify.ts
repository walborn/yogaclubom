import sharp from 'sharp'

async function webpify(inputPath: string) {
  try {
    await sharp(`${inputPath}.jpeg`) 
      .resize({ width: 1280, height: 854, fit: 'inside' })
      .webp({ quality: 75 })
      .toFile(`${inputPath}.webp`) 
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

for (let i = 0; i < 6; i++) {
  webpify(i.toString())
}

