import React from "react";
import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}
const Button: React.FC<ButtonProps> = ({ content, ...props }) => {
  return <button {...props}>{content}</button>;
};

export default Button;
