import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const restPassword=async()=>{
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  }
  return (
    <div className="container py-5">
      <h2 className="mb-3">Please Login</h2>
      <Form
        className="w-50 mx-auto"
        onSubmit={handleSubmit}
        style={{ textAlign: "left" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" className="w-50 d-block mx-auto mb-2" type="submit">
          Login
        </Button>
      </Form>
      <p>
        Forget Password?{" "}
        <Link to="/login" onClick={restPassword} className="text-primary">
          Rest Password
        </Link>
      </p>
      <p>
        New to Genius Car?{" "}
        <Link to="/register" className="text-danger">
          Please Register
        </Link>
      </p>
      
      <SocialLogin/>
    </div>
  );
};

export default Login;
