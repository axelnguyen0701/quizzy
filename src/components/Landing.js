import React from "react";
import { Button } from "reactstrap";
const Landing = (props) => {
  return (
    <>
      <h1 className="text-muted">Quick Quiz!</h1>
      <Button color="danger" onClick={props.onClick}>
        Let's Go!
      </Button>
    </>
  );
};

export default Landing;
