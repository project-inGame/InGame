import "./editorPicks.css";
import doom2016 from "../../images/doom2016PC.jpg";
import uncharted from "../../images/uncharted.jpg";
import EditorGames from "./EditorGames";
import Game from "../Game/Game.js";

const EditorPicks = () => {
  return (
    <div className="editorPicks containerStyle">
      <h2 className="changeh2">Editor Picks</h2>
      <div className="editorPicksCont">
        <Game id="604a8b3dd410b7538c5eb333" />
        <Game id="604aaa937be61a6696af8b1f" />
        <Game id="604aa9987be61a6696af8b1a" />
        <Game id="604a8535d410b7538c5eb318" />
      </div>
    </div>
  );
};

export default EditorPicks;
