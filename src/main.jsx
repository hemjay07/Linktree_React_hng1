import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";

function Main() {
  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
