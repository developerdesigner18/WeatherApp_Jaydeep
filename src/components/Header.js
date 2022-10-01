import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../simple.png";
import { logout } from "../utils/logout";
function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top  bg-opacity-10"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="" style={{ height: 50 }} />
        <Navbar.Brand
          style={{ fontFamily: "cursive", padding: "5px", color: "#a3d4e7" }}
        >
          Weather
        </Navbar.Brand>
      </div>
      <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {localStorage.getItem("formdata") ? (
            <Nav>
              <Nav.Link
                style={{
                  color: "#a3d4e7",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
                onClick={handleLogout}
              >
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );

  // {localStorage.getItem("form") ? (
  //   <>
  //     <Nav.Link
  //       onClick={() => {
  //         navigate("/data");
  //       }}
  //     >
  //       View
  //     </Nav.Link>
  //   </>
  // ) : (
  //   <>
  //     {/* <Nav.Link href="/Login">Login</Nav.Link> */}
  //     <Nav.Link
  //       onClick={() => {
  //         navigate("/");
  //       }}
  //     >
  //       Login
  //     </Nav.Link>
  //     {/* <Nav.Link
  //       onClick={() => {
  //         navigate("/register");
  //       }}
  //     >
  //       Register
  //     </Nav.Link> */}
  //   </>
  // )}
}

export default Header;
