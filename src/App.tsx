import { Texture } from "pixi.js";
import { Sprite, Stage } from "react-pixi-fiber";
import bunny from "./bunny.png";

function App() {
  return (
    <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
      <Sprite texture={Texture.from(bunny)} x={200} y={200} />
    </Stage>
  );
}

export default App;
