import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Image from "./components/image/Image";
import Text from "./components/text/Text";
function App() {
  const [RecipeTitle, setRecipeTitle] = useState(["Loading"]);
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState([
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.D2dBcHq8QOQqQ2zk4K65fAHaFj%26pid%3DApi&f=1&ipt=308b933aacb999da12bc0589fcb708665445db93f5c2e27de16cc545ded671d1&ipo=images",
  ]);
  const [dataSet, setDataSet] = useState([{}]);
  const [text, setText] = useState(["Text"]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes_img")
      .then((response) => response.json())
      .then((data) => {
        setDataSet(data);
        const titles = data.map((el: any) => {
          return el.title;
        });
        const images = data.map((el: any) => {
          return el.image;
        });
        const desc = data.map((el: any) => {
          return el.description;
        });

        setImage(images);
        setText(desc);
        setRecipeTitle(titles);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(dataSet);
  return (
    <div className="App">
      <Button
        onClick={() => {
          setIndex((index + 1) % RecipeTitle.length);
        }}
        content="Next"
      ></Button>
      <Header dataSet={dataSet[index]}></Header>
      <Image dataSet={dataSet[index]}></Image>
      <Text dataSet={dataSet[index]}></Text>
      <Button
        onClick={() => {
          setIndex(index > 0 ? index - 1 : RecipeTitle.length - 1);
        }}
        content="Previous"
      ></Button>
    </div>
  );
}

export default App;
