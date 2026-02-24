import sharp from 'sharp'

async function webpify(inputPath: string) {
  try {
    await sharp(`${inputPath}.jpg`) 
      .resize({ width: 1280, height: 854, fit: 'inside' })
      .webp({ quality: 75 })
      .toFile(`${inputPath}.webp`) 
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

const images = [
  'aleksey_sharov',
  'andrey_mironov',
  'anisa_glushkova',
  'anzhelika_mikonova',
  'evgenya_arsenyeva',
  'irina_sklizkova',
  'nadezhda_ishutina',
  'natalia_kobzeva',
  'natalia_permyakova',
  'nina_kuznetsova',
  'kseniya_kuznetsova',
  'sergey_shkaev',
  'svetlana_krylova',
  'tatiana_dedova',
  'tatiana_dedova',
  'tatiana_pivovarova',
]
for (const image of images) {
  webpify(image)
}

