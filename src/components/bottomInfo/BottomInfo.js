import React from "react";

import classes from "./BottomInfo.module.css";

const BottomInfo = (props) => {
  return (
    <div className={classes.card__networks}>
      <h3>{props.data}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default BottomInfo;
