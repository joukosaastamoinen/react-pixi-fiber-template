import { Texture } from "pixi.js";
import { Sprite } from "@saitonakamura/react-pixi";
import bunny from "./bunny.png";

function App() {
  return <Sprite texture={Texture.from(bunny)} x={200} y={200} />;
}

export default App;
