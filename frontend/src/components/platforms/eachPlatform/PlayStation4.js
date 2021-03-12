import "../PlatformPage.css";

const PlayStation4 = (props) => {
  return (
    <div className="platformGameBox">
      <h1 className="platformTitle">PlayStation 4 Games</h1>

      <div className="platformCont" id="PlayStation4">
        <div className="platformGameCont containerStyle">
          <img src={props.img} alt="" className="imgStyle" />
          <div>
            <h2>Game Title</h2>
            <h4>Release Date:</h4>
            <p>Summary</p>
          </div>
        </div>

        <div className="platformGameCont containerStyle">
          <img src={props.img2} alt="" className="imgStyle" />
          <div>
            <h2>Game Title</h2>
            <h4>Release Date:</h4>
            <p>Summary</p>
          </div>
        </div>

        <div className="platformGameCont containerStyle">
          <img src={props.img} alt="" className="imgStyle" />
          <div>
            <h2>Game Title</h2>
            <h4>Release Date:</h4>
            <p>Summary</p>
          </div>
        </div>

        <div className="platformGameCont containerStyle">
          <img src={props.img2} alt="" className="imgStyle" />
          <div>
            <h2>Game Title</h2>
            <h4>Release Date:</h4>
            <p>Summary</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlayStation4;