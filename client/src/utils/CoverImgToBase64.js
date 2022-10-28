export const ImgToBase64 = (img) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
  });
};
