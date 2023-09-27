import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";
import BmiCalculator from "./BMI CALCULATOR/BmiCalculator";

export default function Gym({ title }) {
  const navigate = useNavigate();
  const [gymData, setGymData] = useState([]);
  const [cardioData, setcardioData] = useState([]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const { name } = JSON.parse(userData);
      setUserName(name);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/strength");
      response.ok
        ? setGymData(await response.json())
        : console.error("Error fetching gym data");
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchcardioData = async () => {
      var response = await fetch("http://localhost:5000/cardio");
      console.log("CArdio DAta");
      response.ok
        ? setcardioData(await response.json())
        : console.error("Error in Fetching data");
    };
    fetchcardioData();
  }, []);
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
              {title}
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
      <div className="m-3 mt-4">
        <div className="row ">
          <div className="col-md-6">
            <img className="min-div-img" src="assets/gym1.jpg" alt="" />
          </div>
          <div className="col-md-6 ">
            <h1 className="text-center" style={{ color: "white" }}>
              Fit n Fine Gym
            </h1>
            {userName && <h2>Welcome, {userName}!</h2>}
            <h6 className="mt-4 text-white text-center ">
              Welcome to our gym! We are thrilled to have you join our community
              of fitness enthusiasts. Whether you are a seasoned athlete or just
              starting out on your fitness journey, we are here to support and
              guide you every step of the way. Our team of experienced trainers
              and staff are dedicated to helping you achieve your fitness goals
              and living your best life. Thank you for choosing us, and we can't
              wait to see you reach your full potential.
            </h6>
          </div>
        </div>
        <div className="container">
          <h1 style={{ color: "white" }} className="text-center mt-3">
            Packages we Offer For Strength
          </h1>
          <div className="row">
            {gymData.map((plan) => (
              <div className="mt-3 col-sm-6" key={plan.id}>
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <h4 className="card-title">{plan.plan}</h4>
                    <h6 className="card-subtitle mb-2">Price: {plan.price}</h6>
                    <p className="card-text">{plan.description}</p>
                    <button
                      className="activebtn btn btn-outline-primary"
                      onClick={() => navigate("/login")}
                    >
                      Go to Login
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <h1 style={{ color: "white" }} className="text-center mt-3">
              Packages we Offer For Cardio
            </h1>
            {cardioData.map((data) => (
              <div className="mt-3 col-sm-6" key={data.id}>
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <h4 className="card-title">{data.plan}</h4>
                    <h6 className="card-subtitle mb-2">Price:-{data.price}</h6>
                    <p className="card-text">{data.description}</p>
                    <button
                      onClick={() => navigate("/login")}
                      className="activebtn btn btn-outline-primary"
                    >
                      Active Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container testmonial mt-4 m-auto">
          <div className="row">
          <h1 style={{ textAlign: "center", color: "white" }} className="mb-3">
            Testimonial
          </h1>
          </div>
          <div className="col-12 mx-aut0">
          <Carousel style={{ marginTop: "10px" }}>
            <Carousel.Item>
              <img
              style={{ height: "280px" }}
                className="d-block w-100"
                src="assets/gym1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "280px" }}
                className="d-block w-100"
                src="assets/gym2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "280px" }}
                className="d-block w-100"
                src="assets/gym1.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "280px" }}
                className="d-block w-100"
                src="assets/gym1.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        </div>
        <div className="vg-page page-funfact ">
          <div
            className="container-fluid bg-dark text-white mt-4 text-center"
            style={{ width: "100%" }}
          >
            <div className="row mx-auto section-counter">
              <div className="col-md-3 py-4 wow fadeIn">
                <h1 className="number" data-number="768">
                  768
                </h1>
                <span>Clients</span>
              </div>
              <div className="col-md-3 py-4 wow fadeIn">
                <h1 className="number" data-number="230">
                  230
                </h1>
                <span>Project Compleate</span>
              </div>
              <div className="col-md-3  py-4 wow fadeIn">
                <h1 className="number" data-number="97">
                  97
                </h1>
                <span>Project Ongoing</span>
              </div>
              <div className="col-md-3  py-4 wow fadeIn">
                <h1 className="number" data-number="699">
                  699
                </h1>
                <span>Client Satisfaction</span>
              </div>
            </div>
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
