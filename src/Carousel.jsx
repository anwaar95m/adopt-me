import { useState } from "react";

const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  const [active, setActive] = useState(0);

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt="thumbnail hero"
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
