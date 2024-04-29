import React from "react";
import "./Text.css";

export interface TextProps {
  dataSet: any;
}
const Text: React.FC<TextProps> = ({ dataSet }) => {
  return <p className="size-limit">{dataSet.description}</p>;
};

export default Text;
