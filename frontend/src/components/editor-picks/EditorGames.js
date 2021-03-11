import "./EditorGames";
import "./editorGames.css"

const EditorGames = (props) => {
  return (
    <div className="editorGamesCont containerStyle">
      <div>
        <img src={props.editorGameImg} alt="{props.editorGameTitle}" className="imgStyle editorGameImg"/>
        <h3>{props.editorGameTitle}</h3>
        <p>{props.editorSummary}</p>
      </div>
    </div>
  );
};

export default EditorGames;
