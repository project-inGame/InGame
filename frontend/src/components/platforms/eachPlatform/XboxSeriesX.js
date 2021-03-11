import "../platformPage.css";

const XboxSeriesX = (props) => {
  return (
    <div className="platformGameBox">
      <h1 className="platformTitle">Xbox Series X Games</h1>

      <div className="platformCont" id="XboxSeriesX">
        <div className="platformGameCont">
          <img src={props.img} alt="" />
          <div>
            <h2>Game Title</h2>
            <h4>Release Date:</h4>
            <p>Summary</p>
          </div>
        </div>

        <div className="platformGameCont">
          <img src={props.img2} alt="" />
          <div>
            <h2>Game Title</h2>
            <h4>Release Date:</h4>
            <p>Summary</p>
          </div>
        </div>

        <div className="platformGameCont">
          <img src={props.img} alt="" />
          <div>
            <h2>Game Title</h2>
            <h4>Release Date:</h4>
            <p>Summary</p>
          </div>
        </div>

        <div className="platformGameCont">
          <img src={props.img2} alt="" />
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