import logo from "./logo.svg";
import "./css/App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [information, setInformation] = useState("haha");
  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((response) => response.json())
      .then((data) => {
        const titles = data.map((el) => {
          return el.image;
        });
        setInformation(titles);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      information.map(el)
      <img src={information} alt=""></img>
    </div>
  );
}

export default App;
