import { fromPath } from 'pdf2pic';

//  sudo apt-get -y install graphicsmagick

const options = {
  quality: 100,
  density: 100,
  saveFilename: 'untitled',
  savePath: './tmp',
  format: 'png',
  // width: 600,
  // height: 600,
  preserveAspectRatio: true,
};
const image = './assets/exemple.pdf';

const convert = fromPath(image, options);
const pageToConvertAsImage = 1;

convert(pageToConvertAsImage, { responseType: 'image' }).then((resolve) => {
  console.log('Page 1 is now converted as image');

  return resolve;
});
