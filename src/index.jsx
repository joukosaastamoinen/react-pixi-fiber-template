import { createRoot } from "@saitonakamura/react-pixi";
import { Application } from "pixi.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const app = new Application({
  width: 800,
  height: 600,
  backgroundColor: 0x10bb99,
  view: document.getElementById("my-canvas"),
});

const root = createRoot(app.stage);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
