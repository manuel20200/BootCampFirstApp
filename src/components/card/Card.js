import React from "react";

import BottomGeneral from "../bottomGeneral/BottomGeneral";
import ImageComponent from "../imageComponent/ImageComponent";
import UserInfo from "../userInfo/UserInfo";
import classes from "./Card.module.css";

const Card = () => {
  return (
    <div className={classes.card}>
      <ImageComponent />
      <UserInfo />
      <BottomGeneral />
    </div>
  );
};

export default Card;
