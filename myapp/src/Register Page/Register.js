import React, { useEffect, useState } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {auth,provider} from "./config.js"
import { signInWithPopup } from "firebase/auth";

export default function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    if (name.trim() === "" || name === null) {
      valid = false;
      toast.warning("Please enter name");
    }
    if (surname.trim() === "" || surname === null) {
      valid = false;
      toast.warning("Please enter Surname");
    }
    if (email.trim() === "" || email === null) {
      valid = false;
      toast.warning("Please enter email");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      toast.warning("Please enter a valid email address");
    }

    if (valid) {
      const response = await fetch('http://localhost:5000/register', {
        method: 'post',
        body: JSON.stringify({ name, surname, email, password, role: role.toLowerCase() }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.warn(data);
      alert("Registration Successful");
      navigate("/login");
    }
  };

  const [value, setValue] = useState("");

  const handleSignup=()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
    });
  }
  // useEffect=(()=>{

  // })
  return (
    <>
      <div className="main-screen">
        <ToastContainer />
        <Navbar className="btn-3" bg="dark" expand="lg">
          <Navbar.Brand className="gym-name mx-4" as={Link} to="/">
            Fit N Fine Gym
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mx-1">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
              <Link className="nav-link text-light" to="/about">
                About us
              </Link>
              <Link className="nav-link text-light" to="/Contactus">
                Contact us
              </Link>
              <Link className="nav-link text-light" to="/login">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          {value ? (
            navigate('/dashboard')
          ) : (
            <>
              <button onClick={handleSignup}>Sign in with Google</button>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                    <h1
                      style={{ fontSize: "40px", fontWeight: "bold" }}
                      className="text-warning mt-3"
                    >
                      Fit N Fine Gym
                    </h1>
                    <h4
                      style={{ fontSize: "30px" }}
                      className="text-warning text-center mt-2"
                    >
                      Register
                    </h4>
                  </div>
                  <div style={{ width: "90%" }} className="card shadow">
                    <div className="card-title text-center border-bottom">
                      <h1 className="p-1">Register</h1>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="mb-2 col-6">
                            <label for="username" className="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="form-control"
                              id="username"
                            />
                          </div>
                          <div className="mb-2 col-6">
                            <label for="username" className="form-label">
                              Surname
                            </label>
                            <input
                              type="text"
                              value={surname}
                              onChange={(e) => setSurname(e.target.value)}
                              className="form-control"
                              id="username"
                            />
                          </div>
                          <div className="mb-2 col-6">
                            <label for="username" className="form-label">
                              Email
                            </label>
                            <input
                              type="text"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control"
                              id="username"
                            />
                          </div>
                          <div className="mb-2 col-6">
                            <label for="username" className="form-label">
                              Password
                            </label>
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="form-control"
                              id="username"
                            />
                          </div>
                          <div className="mb-2 col-6">
                            <label for="username" className="form-label">
                              Role
                            </label>
                            <Form.Select
                              value={role}
                              onChange={(e) => setRole(e.target.value)}
                            >
                              <option value="">Select an option</option>
                              <option value="Client">Client</option>
                            </Form.Select>
                          </div>
                          <button
                            style={{ width: "30%", margin: "auto" }}
                            onClick={handleSubmit}
                            className="btn btn-outline-success d-block mt-2"
                          >
                            Sign Up mere bhai
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
