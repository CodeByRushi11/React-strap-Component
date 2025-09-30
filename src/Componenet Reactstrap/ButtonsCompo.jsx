import React from "react";
import { Button, Badge } from "reactstrap";
const ButtonsCompo = () => {
  return (
    <div>
      <Button color="primary" outline>
        Notifications <Badge>4</Badge>
      </Button>
    </div>
  );
};

export default ButtonsCompo;
