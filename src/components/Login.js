import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Header from "./Header";
import images from "../images/dark.jpeg";
import logo from "../simple.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  // let login = localStorage.getItem("form");
  // useEffect(() => {
  //   if (login) {
  //     navigate("/data");
  //   }
  // }, []);

  const [emaildata, setEmailData] = useState(null);
  const [passworddata, setPasswordData] = useState(null);

  const [error, setError] = useState({
    email: null,
    password: null,
  });

  function logindata(e) {
    e.preventDefault();

    if (!emaildata) {
      setError({ ...error, email: "Enter Your Email" });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emaildata)) {
      setError({ ...error, email: "Invalid Email" });
    } else if (!passworddata) {
      setError({ ...error, password: "Enter your password" });
    } else {
      const data = JSON.parse(localStorage.getItem("form"));
      const found = data.find((ele) => {
        return ele.email === emaildata, ele.password === passworddata;
      });

      if (!found) {
        toast.error("User Not Found !", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.success("Login Sucessfully !", {
          position: toast.POSITION.TOP_CENTER,
        });
        localStorage.setItem("formdata", JSON.stringify(found));
        navigate("/data");
      }
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
          paddingBottom: "50px",
        }}
      > */}
      <div
        style={{
          width: "50%",
          margin: "0 auto",
          textAlign: "center",
        }}
      ></div>

      <div className="row m-0 mobile_content_row" style={{ width: "100%" }}>
        <div className="col-lg-7 col-md-6 col-sm-12 p-0">
          <img
            src={images}
            className="image"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
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
                marginLeft: "2px",
              }}
            >
              Login
            </h1>
          </div>
          <br></br>
          <Form style={{ margin: "0 auto", width: "80%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "#a3d4e7" }}>
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => setEmailData(e.target.value)}
              />
              {error.email && <span className="error">{error.email}</span>}
              <br></br>
              <Form.Label style={{ color: "#a3d4e7" }}>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPasswordData(e.target.value)}
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
              onClick={logindata}
            >
              SUBMIT
            </Button>

            <Link
              to="/register"
              style={{
                display: "inline-block",
                textAlign: "center",
                width: "100%",
                color: "white",
                textDecoration: "none",
              }}
            >
              Dont't have an Account? <b>Sign Up for Free</b>
            </Link>
          </Form>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Login;
