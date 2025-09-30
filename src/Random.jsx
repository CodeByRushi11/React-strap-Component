import React from "react";

const RanDom = () => {
  let ranNum = Math.floor(Math.random() * 100);
  return (
    <div>
      <h1 style={{ background: "#d08181ff" }}>Random number is : {ranNum}</h1>
    </div>
  );
};

export default RanDom;
