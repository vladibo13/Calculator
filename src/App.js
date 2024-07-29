import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonWrapper from "./components/ButtonWrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Screen value="0" />
        <ButtonWrapper />
      </Wrapper>
    </div>
  );
}

export default App;
