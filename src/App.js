import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Register from "./components/Register";
import Data from "./components/Data";
// import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<Header />} /> */}

        <Route path="/register" element={<Register />} />
        <Route
          path="/data"
          element={
            <Protected>
              <Data />
            </Protected>
          }
        />
      </Routes>
      <ToastContainer />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
