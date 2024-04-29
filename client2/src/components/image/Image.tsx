import React from "react";
import "./Image.css";

export interface ImageProps {
  dataSet: any;
}

const Image: React.FC<ImageProps> = ({ dataSet }) => {
  console.log(dataSet);
  return <img src={dataSet.image} alt=""></img>;
};

export default Image;
