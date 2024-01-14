import React from "react";
import ReactDOM from "react-dom";

const displayJSXPower = <h1 id="displayJSX" className="JSXConversion">HELLO from JSX </h1>

console.log(displayJSXPower);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(displayJSXPower);