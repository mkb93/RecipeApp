import "../css/recipes.css";
import React, { useState, useEffect } from "react";
import Button from "./button/Button";

function Recipes() {
  const [information, setInformation] = useState(["haha"]);
  const [index, setIndex] = useState([0]);
  const [title, setTitle] = useState(["title"]);
  const [description, setDescription] = useState(["description"]);
  useEffect(() => {
    fetch("http://localhost:5000/recipes_img")
      .then((response) => response.json())
      .then((data) => {
        const titles = data.map((el) => {
          return el.image;
        });
        const info = data.map((el) => {
          return el.title;
        });
        const desc = data.map((el) => {
          return el.description;
        });
        setInformation(titles);
        setTitle(info);
        setDescription(desc);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Button
        onClick={() => {
          setIndex(index > 0 ? index - 1 : description.length - 1);
        }}
        content="Previous"
      />

      <div class="image-container">
        <div class="title">
          <h1>{title[index]}</h1>
        </div>
        <div class="image-slider">
          <img src={information[index]} alt=""></img>
        </div>
        <div class="description">
          <p>{description[index]}</p>
        </div>
      </div>
      <Button
        onClick={() => {
          setIndex((index + 1) % information.length);
        }}
        content="Next"
      />
    </div>
  );
}

export default Recipes;
