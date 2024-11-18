
import Gallery from "react-photo-gallery";

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
  {
    src: "https://via.placeholder.com/600x800",
    width: 3,
    height: 4,
  },
];

const PhotoGallery = () => {
  return (
    <div>
      <h1>My Photo Gallery</h1>
      <Gallery photos={photos} />
    </div>
  );
};

export default PhotoGallery;
