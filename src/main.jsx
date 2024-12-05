import React from "react";
import ReactDOM from "react-dom/client";
import "../App.css";
import Index from "./routes";
import {Myprovider} from "./Context/Context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
    <Myprovider>
      <Index />
    </Myprovider>
);