import classes from "./ImageComponent.module.css";

import image from "../../utilities/images/image-victor.jpg";

const ImageComponent = () => {
  return (
    <div className={classes.card__top}>
      <img src={image} alt="person" />
    </div>
  );
};

export default ImageComponent;
