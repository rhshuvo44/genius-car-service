import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div className="container py-5">
      <h1>Details</h1>
      <p>{serviceId}</p>
      <Link to="/checkout">
        <Button variant="dark">Proceed Checkout</Button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
