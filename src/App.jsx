import { useState } from "react";
import "./App.scss";
import BigTitle from "./components/BigTitle";
import Generator from "./components/Generator";

function App() {
  return (
    <div className="App">
      <BigTitle title="Password Generator" />
      <Generator></Generator>
    </div>
  );
}

export default App;
