import PageHeader from "../../Components/pageheader.component";
import "react-image-lightbox/style.css";
import Lightbox from "./lightbox.scene";
import { GalleryContainer } from "./gallery.styles";

const PhotoGallery = () => (
  <div id="gallery">
    <PageHeader text="Gallery" />
    <GalleryContainer>
      <Lightbox />
    </GalleryContainer>
  </div>
);

export default PhotoGallery;
