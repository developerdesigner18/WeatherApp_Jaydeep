import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "./Header";
import images from "../images/green.webp";
import logo from "../simple.png";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState(
    localStorage.getItem("form") ? JSON.parse(localStorage.getItem("form")) : []
  );

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [error, setError] = useState({
    name: null,
    email: null,
    password: null,
  });

  function submit(e) {
    e.preventDefault();

    if (!name) {
      setError({ ...error, name: "Enter your name" });
    } else if (!email) {
      setError({ ...error, email: "Enter Your Email" });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError({ ...error, email: "Invalid Email" });
    } else if (!password) {
      setError({ ...error, password: "Enter Your password" });
    } else if (password.length < 5) {
      setError({ ...error, password: "Minimum Five character Add" });
    } else {
      const formdata = { name, email, password };
      const newData = [...data];

      newData.push(formdata);
      setData(newData);
      localStorage.setItem("form", JSON.stringify(newData));
      // localStorage.setItem("formdata", JSON.stringify(formdata));
      navigate("/");
    }
  }

  return (
    <div>
      <Header />
      {/* <div
        className="container"
        style={{
          boxShadow: "rgb(209 209 209) 11px 26px 36px 9px",
          padding: "50px",
          margin: "50px 0px 50px 100px",
          background: "white",
          borderRadius: "22px",
        }}
      > */}
      <div className="row m-0 mobile_content_row" style={{ width: "100%" }}>
        <div className="col-lg-7 col-md-6 col-sm-12 p-0">
          <img
            src={images}
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            alt=""
          />
        </div>
        <div
          className="col-lg-5 col-md-6 col-sm-12 p-0 mobile_content"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt=""
              style={{
                height: 50,
                width: "50px",
              }}
            />
            <h1
              style={{
                textAlign: "center",
                color: "#a3d4e7",
                marginLeft: "3px",
              }}
            >
              Register{" "}
            </h1>
          </div>

          <Form style={{ margin: "0 auto", width: "80%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "#a3d4e7" }}>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {error.name && <span className="error">{error.name}</span>}
              <br></br>
              <Form.Label style={{ color: "#a3d4e7" }}>
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {error.email && <span className="error">{error.email}</span>}
              <br></br>
              <Form.Text className="text-muted"></Form.Text>

              <Form.Label style={{ color: "#a3d4e7" }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {error.password && (
                <span className="error">{error.password}</span>
              )}
              <br></br>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
            <Button
              variant=""
              type="submit"
              onClick={submit}
              className="btn btn-outline-dark w-80"
              style={{
                fontWeight: "600",
                margin: "0 auto 10px",
                display: "block",
                backgroundColor: "#2e6276",
                color: "white",
                width: "30%",
                padding: "8px",
              }}
            >
              SUBMIT
            </Button>
            <Link
              to="/"
              style={{
                width: "100%",
                textAlign: "center",
                display: "inline-block",
                color: "black",
                textDecoration: "none",
              }}
            >
              <b style={{ color: "white", fontWeight: "400" }}>Back to Login</b>
            </Link>
          </Form>
        </div>
      </div>
    </div>
    // </div>
  );
}
