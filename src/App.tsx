import { Texture } from "pixi.js";
import { Sprite, Stage } from "@saitonakamura/react-pixi";
import useSound from "use-sound";
import bunny from "./bunny.png";
import pop from "./pop.mp3";

function App() {
  const [playPop] = useSound(pop);
  return (
    <div
      onClick={() => {
        playPop();
      }}
    >
      <Stage options={{ backgroundColor: 0x10bb99 }} width={800} height={600}>
        <Sprite texture={Texture.from(bunny)} x={200} y={200} />
      </Stage>
    </div>
  );
}

export default App;
