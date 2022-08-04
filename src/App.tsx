import { Texture } from "pixi.js";
import { Sprite, Stage } from "@saitonakamura/react-pixi";
import bunny from "./bunny.png";

function App() {
  return (
    <Stage options={{ backgroundColor: 0x10bb99 }} width={800} height={600}>
      <Sprite texture={Texture.from(bunny)} x={200} y={200} />
    </Stage>
  );
}

export default App;
