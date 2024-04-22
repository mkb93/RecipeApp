import React from "react";

import "./Button.css";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}
const Button = (props: IButton) => {
  return <button onClick={props.onClick}>{props.content}</button>;
};

export default Button;
