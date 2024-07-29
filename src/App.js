import "./App.css";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonWrapper from "./components/ButtonWrapper";
import Button from "./components/Button";
import React, { useState } from "react";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Screen value="0" />
        <ButtonWrapper>
          {btnValues.flat().map((btnValue, i) => {
            return (
              <Button
                key={i}
                className={btnValue === "=" ? "equals" : ""}
                value={btnValue}
                onClick={() => {
                  console.log(`Button ${i} clicked!`);
                }}
              ></Button>
            );
          })}
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
}

export default App;
