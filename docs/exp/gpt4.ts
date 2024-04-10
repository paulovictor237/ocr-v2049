import Tesseract, { PSM } from 'tesseract.js';
import { fromPath } from 'pdf2pic';

const pdfToImages = async (filePath: string, pageToConvert = 1) => {
  const storeAsImage = fromPath(filePath, {
    quality: 100,
    density: 1000,
    saveFilename: 'temp',
    savePath: './tmp',
    format: 'png',
    // width: 600,
    // height: 600,
    preserveAspectRatio: true,
    compression: 'jpeg',
  });

  const imagePath = await storeAsImage(pageToConvert, {
    responseType: 'image',
  });
  return imagePath.path;
};

async function extractTextFromImages(images: string) {
  const texts = [];
  const result = await Tesseract.recognize(images, 'por', {
    tessedit_pageseg_mode: PSM.CIRCLE_WORD,
  });
  texts.push(result.data.text);
  return texts;
}
const file_name = './assets/exemple.pdf';

console.log('🐞 ~ file_name:', file_name);
const image_path = await pdfToImages(file_name);
const text = await extractTextFromImages(image_path as string);
console.log('🐞 ~ text:', text);
console.log('🐞 ~ text.length:', text.length);
// const image_mat = await processImage(image_path);
// const text = await extractTextFromImage(image_mat);

// const extractTextFromImage = async (imageMat: any) => {
//   return new Promise<string>((resolve, reject) => {
//     worker
//       .recognize(imageMat, 'por', { psm: 6 })
//       .then(({ text }) => {
//         resolve(text);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// const processImage = async (imagePath: string) => {
//   let src = cv.imread(imagePath);
//   let dst = new cv.Mat();
//   cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);
//   src.delete();
//   return dst;
// };
