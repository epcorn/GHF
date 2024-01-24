import { useEffect, useState } from "react";
import { gallery } from "../components/Utils";
const allCategories = ["All", ...new Set(gallery.map((item) => item.category))];

const Gallery = () => {
  const [images, setImages] = useState(gallery);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterImages = (category) => {
    if (category === "All") {
      setImages(gallery);
      return;
    }
    const newImages = gallery.filter((item) => item.category === category);
    setImages(newImages);
  };

  return (
    <div className="gallery">
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-3">Photos</h1>
          <div className="gallery-filter">
            {allCategories.map((item) => (
              <button
                className="btn btn-default filter-button"
                onClick={() => filterImages(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          <br />
          {images.map((item) => (
            <div className="gallery_product col-lg-3 col-md-4" key={item.id}>
              <img
                src={item.image}
                className="img-responsive"
                alt={item.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
