import React from "react";

import classes from "./BottomGeneral.module.css";
import BottomInfo from "../bottomInfo/BottomInfo";

const data = [
  {
    data: "80k",
    desc: "follower",
  },
  {
    data: "803k",
    desc: "likes",
  },
  {
    data: "1,4k",
    desc: "photos",
  },
];

const BottomGeneral = () => {
  const sample1 = (
    <div>
      <BottomInfo data={"80k"} desc={"followers"}></BottomInfo>
      <BottomInfo data={"803k"} desc={"likes"}></BottomInfo>
      <BottomInfo data={"1.4k"} desc={"photos"}></BottomInfo>
    </div>
  );

  const sample2 = data.map((item) => (
    <BottomInfo data={item.data} desc={item.desc} />
  ));

  return <div className={classes.card__bottom}>{sample2}</div>;
};

export default BottomGeneral;
