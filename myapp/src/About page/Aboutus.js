import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "./About.css";
import Footer from "../Footer/Footer";
import BmiCalculator from "../BMI CALCULATOR/BmiCalculator";
export default function Aboutus() {
  return (
   <>
      <div>
        <div>
          <Navbar
            className="btn-3"
            bg="dark"
            expand="lg"
            style={{
              backgroundColor: "#555555",
              padding: "12px",
              width: "100%",
              zIndex: "1000",
            }}
          >
            <Navbar.Brand className="gym-name mx-4" as={Link} to="/">
              <h6>Fit n Fine Gym</h6>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto mx-1 ">
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
        </div>
      </div>
     
          <img
            style={{ maxHeight: "400px",width:'100%' }}
            src="assets/gym2.jpg"
            alt=""
            />
    

    <div className="container-fluid">
  <div className="row mt-3">
    <h1 className="text-center text-white mt-2 mb-3">About us</h1>
    <div className="col-md-6 mx-auto">
      <h3 className="text-white mt-4" style={{ fontSize: "15px" }}>
        Our gym was established in 2019 with the aim of helping people improve
        their physical health and wellbeing. We believe that everyone deserves
        the opportunity to live a healthy and active lifestyle, and we are
        committed to providing a welcoming and inclusive environment for people
        of all ages and fitness levels. At our gym, we believe that fitness is
        about more than just physical health – it's about feeling good, both
        inside and out. That's why we also offer nutritional counseling and
        support to help you develop healthy eating habits and achieve a balanced
        lifestyle.
      </h3>
    </div>
    <div className="col-md-6 mx-auto mb-4">
      <img
        style={{ maxWidth: "100%" }}
        src="assets/gymaboutsection.jpg"
        alt=""
      />
    </div>
  </div>
      <div className="row">
        <h5 className="text-center text-white pt-2 mt-3">JOIN US NOW</h5>
        <div className="col-12 text-center text-white pb-2 bold">
          <h2>
            JOIN US OUR FREE WORKOUT TRAINING <br />
            WITH FIT N FINE GYM
        {/* <div className="col">hi</div>
        <div className="col">hi2</div>
      <div className="col">hi3</div> */}
          </h2>
        </div>
      </div>
   
      <div
        className=" bg-dark mt-4 mx-auto text-white"
        style={{ width: "100%" }}
        >
        <BmiCalculator />
        </div>
        <div className=" mt-4 mx-auto" >
        <Footer style={{ padding: "12px",
        width: "100%" }}/>
      </div>
      </div>      
</>
  );
}
