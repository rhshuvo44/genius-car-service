import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const{id,name,price,description,img}=service;
    const navigate=useNavigate()
    const handleService=(id)=>{
      navigate(`/service/${id}`)
    }
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
      <Button onClick={()=>handleService(id)} variant="dark">See More</Button>
  </Card.Body>
</Card>
        </div>
    )};

export default Service;