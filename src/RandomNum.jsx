import React from "react";

const RandomNum = () => {
  let ranNum = Math.floor(Math.random() * 100);
  const bgColor = ranNum > 50 ? "#81d0a1" : "#d08181";

  return (
    <div>
      <h1 style={{ background: bgColor }}>Random number is : {ranNum}</h1>
    </div>
  );
};

export default RandomNum;
