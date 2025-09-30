import React from "react";
import { Progress } from "reactstrap";
const ProgressCompo = () => {
  return (
    <div>
      <Progress animated striped value={55} />
    </div>
  );
};

export default ProgressCompo;
