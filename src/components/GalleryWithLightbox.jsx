// import  { useState } from "react";
// import Gallery from "react-photo-gallery";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

// const photos = [
//   {
//     src: "https://via.placeholder.com/800x600",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "https://via.placeholder.com/600x600",
//     width: 1,
//     height: 1,
//   },
// ];

// const GalleryWithLightbox = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [lightboxOpen, setLightboxOpen] = useState(false);

//   const openLightbox = (index) => {
//     setCurrentImage(index);
//     setLightboxOpen(true);
//   };

//   const closeLightbox = () => setLightboxOpen(false);

//   return (
//     <div>
//       <Gallery
//         photos={photos}
//         onClick={(e, { index }) => openLightbox(index)}
//       />
//       {lightboxOpen && (
//         <Lightbox
//           mainSrc={photos[currentImage].src}
//           nextSrc={photos[(currentImage + 1) % photos.length]?.src}
//           prevSrc={photos[(currentImage + photos.length - 1) % photos.length]?.src}
//           onCloseRequest={closeLightbox}
//           onMovePrevRequest={() =>
//             setCurrentImage((currentImage + photos.length - 1) % photos.length)
//           }
//           onMoveNextRequest={() =>
//             setCurrentImage((currentImage + 1) % photos.length)
//           }
//         />
//       )}
//     </div>
//   );
// };

// export default GalleryWithLightbox;



//npm install react-modal-image

import Gallery from "react-photo-gallery";
import ModalImage from "react-modal-image";

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
  return (
    <div>
      <Gallery
        photos={photos}
        renderImage={({ index, photo }) => (
          <ModalImage
            small={photo.src}
            large={photo.src}
            alt={`Image ${index}`}
            className="gallery-item"
          />
        )}
      />
    </div>
  );
};

export default GalleryWithLightbox;
