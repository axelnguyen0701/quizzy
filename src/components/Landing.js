import React from "react";
import { Button, Row, Col } from "react-bootstrap";
const Landing = (props) => {
  const renderCategories = () => {
    if (props.categories) {
      return props.categories.map(({ name, id }) => (
        <Col lg="4" className="mt-3" key={id}>
          <Button
            color="success"
            className="w-75"
            onClick={() => props.onCategoryChosen(id)}
          >
            {name}
          </Button>
        </Col>
      ));
    }
  };
  return (
    <>
      <h1 className="text-muted">Quick Quiz!</h1>
      <h2>High Score: {props.highScore}</h2>
      <Row>{renderCategories()}</Row>
    </>
  );
};

export default Landing;
