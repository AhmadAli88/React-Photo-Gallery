
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
];

const AdvancedGallery = () => {
  const handlePhotoClick = (event, { photo, index }) => {
    alert(`Photo clicked: ${photo.src}, Index: ${index}`);
  };

  return <Gallery photos={photos} onClick={handlePhotoClick} />;
};

export default AdvancedGallery;
