import React from "react";
import ReactDOM from "react-dom";

//Make functional Compenents in React
// Functional Compenents are basically returning an JSX or React Elements.
const HeaderComponent1 = () => {
  return <h1 className="h1Header">Returning JSX from compondsfdsents</h1>;
};

const HeaderComponent = () => {
  return (
    <div>
      <HeaderComponent1 />
      <h1 className="h1Header">Returning JSX from components</h1>
    </div>
  );
};

console.log(HeaderComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
