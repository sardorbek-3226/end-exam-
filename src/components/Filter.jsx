import React from "react";
import "../css/fitler.css"; 

 function Filter() {
  return <div   style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap:"16px"
  }}>
  <div className="card">
      <form className="intervals">
        <label className="option">
          <input type="radio" name="time" value="0" />
          <span className="dot"></span>
          <span className="text">0 minutes</span>
        </label>

        <label className="option">
          <input type="radio" name="time" value="5" />
          <span className="dot"></span>
          <span className="text">5 minutes</span>
        </label>

        <label className="option">
          <input type="radio" name="time" value="10" />
          <span className="dot"></span>
          <span className="text">10 minutes</span>
        </label>

        <label className="option">
          <input type="radio" name="time" value="15" />
          <span className="dot"></span>
          <span className="text">15 minutes</span>
        </label>

        <label className="option">
          <input type="radio" name="time" value="20" />
          <span className="dot"></span>
          <span className="text">20 minutes</span>
        </label>

        <button type="reset" className="clear">Clear</button>
      </form>

    </div>
      <div>
        <button className="btn">Nothing</button>
      </div>
  </div>;
}

export default Filter