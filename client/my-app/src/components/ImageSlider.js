import logo from "./logo.svg";
import "../css/recipes.css";
import React, { useState, useEffect } from "react";

function Recipes() {
  const [information, setInformation] = useState("haha");
  useEffect(() => {
    fetch("http://localhost:5000/recipes_img")
      .then((response) => response.json())
      .then((data) => {
        const titles = data.map((el) => {
          return el.image;
        });
        setInformation(titles.join(" "));
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return <div></div>;
}

export default Recipes;
