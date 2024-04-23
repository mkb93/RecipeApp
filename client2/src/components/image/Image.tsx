import React from "react";
import "./Image.css";

export interface ImageProps {
  url: string;
}
const Image: React.FC<ImageProps> = ({ url }) => {
  return <img src={url} alt=""></img>;
};

export default Image;
