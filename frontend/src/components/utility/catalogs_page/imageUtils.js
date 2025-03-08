// src/utils/imageUtils.js
export function useImageUtils() {
    const getImageUrl = (imagePath) => {
      if (!imagePath) return "../assets/images/default-property.jpg";
      if (imagePath.startsWith("/files")) {
        return `http://127.0.0.1:8006${imagePath}`;
      }
      return imagePath;
    };
  
    return {
      getImageUrl,
    };
  }