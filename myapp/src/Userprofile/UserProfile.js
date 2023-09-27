import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
export default function UserProfile() {
  const name = JSON.parse(localStorage.getItem("user"));
  const useremail = name ? name.email : "";
  const username = name ? name.name : "";
  const surname = name ? name.surname : "";
  const email = name ? name.email : "";
  const userlocation = name ? name.location : "";
  const userAge = name ? name.age : "";

  const [userData, setUserData] = useState(null);
  console.log(userlocation);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/getclient");
      if (response.ok) {
        const data = await response.json();
        const user = data.find((item) => item.email === useremail);
        setUserData(user);
        console.log(userData);
      } else {
        console.error("Error fetching gym data");
      }
    };

    fetchData();
  }, [useremail]);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <>
      <div>
        <Navbar className="btn-3" bg="dark" expand="lg">
          <Navbar.Brand className="gym-name mx-4" as={Link} to="/">
            Fit N Fine Gym
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mx-1 ">
              <Link className="nav-link text-light" to="/dashboard">
                Dashboard
              </Link>
              <Link className="nav-link text-light" to="/userprofile">
                Profile
              </Link>
            </Nav>
            <Link
              className="btn btn-outline-success m-2"
              style={{ float: "right", margin: "10px" }}
              onClick={handleLogout}
              to="/login"
            >
              Logout
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {userData && (
        <>
          <div style={{ width: "100%", margin: "20px 0" }} className="row">
            <h1 className="text-center text-white dashboardheading">Profile</h1>
            <img
              className="mx-auto mt-3 col-8 col-lg-7  col-md-8 col-sm-8"
              style={{ width: "18%", margin: "10px" }}
              src="assets/user.png"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-center mt-3 text-white">Hello {username}</h3>
          </div>
          <div
            style={{
              width: "50%",
              margin: "20px auto",
              padding: "20px",
            }}
            className="card mt-4 bg-transparent border border-secondary shadow"
          >
            <div
              className="text-light text-center"
              style={{ fontSize: "20px" }}
            >
              <div className="row">
                <div className="col">
                  <strong>Name:</strong>
                </div>
                <div className="col">
                  <strong>Surname:</strong>
                </div>
              </div>
              <div className="row">
                <div className="col">{username}</div>
                <div className="col">{surname}</div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <strong>Email:</strong>
                </div>
                <div className="col">
                  <strong>Location:</strong>
                </div>
              </div>
              <div className="row">
                <div className="col">{email}</div>
                <div className="col">
                  {userData.location ? userData.location : "N/A"}
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <strong>Age:</strong>
                </div>
                <div className="col">
                  <strong>Phone Number:</strong>
                </div>
              </div>
              <div className="row">
                <div className="col">{userData.age}</div>
                <div className="col">{userData.phoneno}</div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <strong>Address:</strong>
                </div>
                <div className="col">
                  <strong>Plan:</strong>
                </div>
              </div>
              <div className="row">
                <div className="col">{userData.address}</div>
                <div className="col">{userData.plan}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
