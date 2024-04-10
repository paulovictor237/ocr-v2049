import cv from 'opencv-ts';
import type { Mat, Rect } from 'opencv-ts';

cv.onRuntimeInitialized = () => {
  const src = cv.imread('./assets/__00_exemple.jpg');
  const dst: Mat = new cv.Mat(src.cols, src.rows, cv.CV_8UC4);

  cv.resize(src, dst, new cv.Size(500, 500), 0, 0, cv.INTER_AREA);

  const roiRect: Rect = new cv.Rect(0, 0, 200, 200);

  const roi = dst.roi(roiRect);

  cv.imshow('outputCanvas', roi);
};
