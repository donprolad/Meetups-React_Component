import React from "react";
import ReactDOM from "react-dom";
import Categories from "./components/Categories";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Meetup</h1>
      <Categories />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
