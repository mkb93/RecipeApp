import React from "react";
import "./Text.css";

export interface TextProps {
  contents: string;
}
const Text: React.FC<TextProps> = ({ contents }) => {
  return <p className="size-limit">{contents}</p>;
};

export default Text;
