import React from "react";

function Home() {
  return (
    <div>
      <button className="btn">something</button>

      <h3>gender</h3>
      <form style={{ display: "flex", gap: "10px" }}>
        <legend>Male</legend>
        <input type="radio" name='male'/>
        <legend>Female</legend>
        <input type="radio" name='male'/>
      </form>
    </div>
  );
}

export default Home;
