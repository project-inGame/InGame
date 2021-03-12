import "../PlatformPage.css";

const XboxSeriesX = (props) => {
  return (
    <div className="platformGameBox">
      <h1 className="platformTitle">Xbox Series X Games</h1>

      <div className="platformCont" id="XboxSeriesX">
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

export default XboxSeriesX;