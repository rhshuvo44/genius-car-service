import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({service}) => {
    const{name,price,description,img}=service;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
            
        <Card>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>{description}
    </Card.Text>
  </Card.Body>
  <Card.Body>
      <p>Price: ${price}</p>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
        </div>
    )};

export default Service;