import React from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [
    createUserWithEmailAndPassword,user
  ] = useCreateUserWithEmailAndPassword(auth);
  const navigate=useNavigate()
  if(user){
    navigate('/home')
  }
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password)
  };
  return (
    <div className="container py-5">
      <h2>Please Register</h2>
      <Form
        className="w-50 mx-auto"
        onSubmit={handleRegister}
        style={{ textAlign: "left" }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms" className="m-2">Accept Genius Car Terms and Conditions</label>
        <Button variant="primary" className="w-50 d-block mx-auto mb-2" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Allready have an account?{" "}
        <Link to="/login" className="text-danger">
          Please Login
        </Link>
      </p>
      <SocialLogin/>
    </div>
  );
};

export default Register;
