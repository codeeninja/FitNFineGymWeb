import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Dashboard() {
  const [remainingDays, setRemainingDays] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://example-api.com/data");
        if (response.ok) {
          const data = await response.json();
          const currentDate = new Date();
          const numOfDays = data.numOfDays;
          const remaining = currentDate.getDate() - numOfDays;
          setRemainingDays(remaining > 0 ? remaining : 0);
        } else {
          console.error("Error fetching data from API");
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
  };

  const chartData = {
    labels: ["Remaining Days", "Completed Days"],
    datasets: [
      {
        data: [remainingDays, 365 - remainingDays],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
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
      <h1 className="text-center mt-3 text-white">Dashboard</h1>
      <div
        className="mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <div style={{ width: "300px" }}>
          <Pie data={chartData} />
        </div>
      </div>
    </>
  );
}
