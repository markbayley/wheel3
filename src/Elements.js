import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>

      <label htmlFor="thing">Text Input</label>
      <input type="text" id="thing" />

      <label htmlFor="thing">Email Input</label>
      <input type="email" id="thing" />

      <label htmlFor="thing">Date Input</label>
      <input type="date" id="thing" />

      <label htmlFor="thing">Textarea</label>
      <textarea id="thing" />

      <input type="checkbox" id="check" />
      <label htmlFor="check">Checkbox</label>

      <label htmlFor="thing">Select Input</label>
      <select id="thing">
        <option value="boop">Red</option>
        <option value="zoop">Green</option>
        <option value="loop">Blue</option>
      </select>

      <label htmlFor="thing">Select Multiple</label>
      <select id="thing" multiple>
        <option value="boop">Red</option>
        <option value="zoop">Green</option>
        <option value="loop">Blue</option>
      </select>
      <button className="button button--primary">Fuck</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
