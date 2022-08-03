import { Texture } from "pixi.js";
import { Sprite, Stage } from "react-pixi-fiber";
import bunny from "./bunny.png";

const OPTIONS = { backgroundColor: 0x10bb99, height: 600, width: 800 };

function App() {
  return (
    <Stage options={OPTIONS}>
      <Sprite texture={Texture.from(bunny)} x={200} y={200} />
    </Stage>
  );
}

export default App;
