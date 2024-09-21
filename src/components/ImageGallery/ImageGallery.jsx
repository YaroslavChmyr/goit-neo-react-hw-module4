import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {

  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li className={css.item} key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;