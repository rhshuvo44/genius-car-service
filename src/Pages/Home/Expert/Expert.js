import React from "react";
import { Card } from "react-bootstrap";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Expert;
