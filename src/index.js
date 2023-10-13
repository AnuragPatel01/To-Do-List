import React from "react";
import ReactDom from "react-dom"
// import App from"./App";
import "./App.css";
// import Inp from "./Inp";
import Todo from "./ToDo";

const root= ReactDom.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
    <Todo />
    </React.StrictMode>
)
