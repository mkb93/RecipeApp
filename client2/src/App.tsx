import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Image from "./components/image/Image";
import Text from "./components/text/Text";
function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("learn react");
        }}
        content="click here for a console log"
      ></Button>
      <Header title="Pizza"></Header>
      <Image url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gLQqgABw2vMNJun7ru_rVgHaE7%26pid%3DApi&f=1&ipt=3acfa0a73e85d3c39135c94e3e4026999422ff423c07ad8de5e6cc478fe5838c&ipo=images"></Image>
      <Text contents="bread like food, lots of writting is necessary to test whether the feature I want to implement will actually work or if it will fail and everyone will cry from the failure. of course crying from the failure is an option"></Text>
      <Button
        onClick={() => {
          console.log("eat pizza");
        }}
        content="click here for a console log"
      ></Button>
    </div>
  );
}

export default App;
