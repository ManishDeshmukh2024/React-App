import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Body from "./Body";


const AppContainer = () => {
  return (
    <div>
      {Header()}
      {Body()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppContainer />);
