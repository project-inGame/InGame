import "./editorPicks.css";
import doom2016 from "../../images/doom2016PC.jpg";
import uncharted from "../../images/uncharted.jpg";
import EditorGames from "./EditorGames";

const EditorPicks = () => {
  return (
    <div className="editorPicks">
      <h2>Editor Picks</h2>

      <div className="editorPicksCont">
        <EditorGames
          editorGameImg={doom2016}
          editorGameTitle="Doom"
          editorSummary=" There is no taking cover or stopping to regenerate health in campaign mode as you beat back Hell’s raging demon hordes"
        />
        <EditorGames
          editorGameImg={uncharted}
          editorGameTitle="Uncharted: Lost Legacy"
          editorSummary="The first standalone adventure in Uncharted franchise history led by Chloe Frazer. In order to recover a fabled ancient Indian artefact and keep it out of the hands of a ruthless war profiteer, Chloe Frazer must enlist the aid of renowned mercenary Nadine Ross (from Uncharted 4: A Thief's End)."
        />
        <EditorGames
          editorGameImg={doom2016}
          editorGameTitle="Doom"
          editorSummary=" There is no taking cover or stopping to regenerate health in campaign mode as you beat back Hell’s raging demon hordes"
        />
        <EditorGames
          editorGameImg={doom2016}
          editorGameTitle="Doom"
          editorSummary=" There is no taking cover or stopping to regenerate health in campaign mode as you beat back Hell’s raging demon hordes"
        />
      </div>
    </div>
  );
};

export default EditorPicks;
