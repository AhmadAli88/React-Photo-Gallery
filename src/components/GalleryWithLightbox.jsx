import { useState } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const photos = [
  {
    src: "https://via.placeholder.com/800x600",
    width: 4,
    height: 3,
  },
  {
    src: "https://via.placeholder.com/600x600",
    width: 1,
    height: 1,
  },
];

const GalleryWithLightbox = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (event, { index }) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      {lightboxOpen && (
        <Lightbox
          images={photos.map(({ src }) => ({ src }))}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          currentIndex={currentImage}
        />
      )}
    </div>
  );
};

export default GalleryWithLightbox;
