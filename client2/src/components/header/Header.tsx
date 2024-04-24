import React from "react";
import "./Header.css";

export interface HeaderProps {
  dataSet: any;
}
const Header: React.FC<HeaderProps> = ({ dataSet }) => {
  return <h1>{dataSet.title}</h1>;
};

export default Header;
