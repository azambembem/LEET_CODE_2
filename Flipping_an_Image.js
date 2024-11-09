const flipAndInvertImage = (image) => {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < Math.floor((image[i].length + 1) / 2); j++) {
      let temp = image[i][j] ^ 1;
      image[i][j] = image[i][image[i].length - 1 - j] ^ 1;
      image[i][image[i].length - 1 - j] = temp;
    }
  }
  return image;
};
console.log(
  flipAndInvertImage(
    (image = [
      [1, 1, 0],
      [1, 0, 1],
      [0, 0, 0]
    ])
  )
);
