import Tesseract from 'tesseract.js';

async function extractTextFromImages(images: string) {
  const texts = [];
  const result = await Tesseract.recognize(images, 'por');
  texts.push(result.data.text);
  console.log('🐞 ~ texts:', texts);
  return texts;
}

const image = './assets/__00_exemple.jpg';
extractTextFromImages(image);
