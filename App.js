 import React from 'react'
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading",key : 1 },
  "Hello world from react"
);

const heading2 = React.createElement(
  "h1",
  { id: "heading",key : 2 },
  "Hello world from react2"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [heading, heading2])
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
