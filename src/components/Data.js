import React, { useEffect, useState } from "react";
import Header from "./Header";
import Form from "react-bootstrap/Form";
import images from "../images/rain-window-dark-water-raindrop-wet-drip-sad-droplets.jpg";
import Cloud from "../images/photo-1536183922588-166604504d5e.jpg";
import weather from "../images/rain-window-dark-water-raindrop-wet-drip-sad-droplets.jpg";
import Default from "../images/lightning-1158027_960_720.jpg";

export default function Data() {
  const [text, setText] = useState();
  const [city, setCity] = useState();
  const date = new Date().toLocaleDateString();

  const fetchapi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=6f2017805a564e9ae30d659d80d1ded2`;
    const responce = await fetch(url);
    const res = await responce.json();

    setCity(res);
  };

  useEffect(() => {
    fetchapi();
  }, [text]);

  return (
    <div>
      <Header />
      {/* <div
        className="container-fuild"
        style={{
          background: "#000",
          padding: "50px",
        }}
      > */}
      {/* <div
          className="container"
          style={{
            // boxShadow: "rgb(209 209 209) 11px 26px 36px 9px",
            padding: "50px",
            background: "#0a0909",
            borderRadius: "22px",
          }}
        > */}
      <div className="row m-0">
        <div className="col-md-6 col-sm-12 p-0">
          {city?.name?.length > 0 && city?.weather[0]?.main === "Rain" ? (
            <img
              src={images}
              alt=""
              style={{ width: "200%", height: "100vh", objectFit: "cover" }}
            />
          ) : city?.name?.length > 0 && city?.weather[0]?.main === "Clouds" ? (
            <img
              src={Cloud}
              alt=""
              style={{ width: "200%", height: "100vh", objectFit: "cover" }}
            />
          ) : (
            <img
              src={Default}
              alt=""
              style={{ width: "200%", height: "100vh", objectFit: "cover" }}
            />
          )}

          {/* {!text && (
            <img
              src={weather}
              alt=""
              style={{ width: "200%", height: "100vh", objectFit: "cover" }}
            />
          )} */}

          {city?.name?.length > 0 ? (
            <div>
              <div className="city-img">
                <div>
                  <p
                    style={{
                      fontSize: "65px",
                      float: "left",
                      fontWeight: "500",
                    }}
                  >
                    {city?.main?.temp} &deg;c
                  </p>

                  <p
                    style={{
                      fontSize: "35px",
                      fontWeight: "600px",
                      float: "left",
                      padding: "15px 10px",
                    }}
                  >
                    {city?.name}
                    <div style={{ fontSize: "15px" }}>
                      <p>{date}</p>
                    </div>
                  </p>
                  <p style={{ float: "left", padding: "65px 0 0 0" }}>
                    {city?.weather[0]?.main}
                  </p>
                  {city?.weather[0]?.main === "Rain" && (
                    <i
                      className="fa-sharp fa-solid fa-cloud-rain"
                      style={{
                        padding: "36px 0px",
                        margin: "2px -33px 0px -29px",
                      }}
                    ></i>
                  )}
                  {city?.weather[0]?.main === "Clouds" && (
                    <i
                      className="fa-solid fa-cloud"
                      style={{
                        padding: "36px 0px",
                        margin: "2px -33px 0px -29px",
                      }}
                    ></i>
                  )}
                  {city?.weather[0]?.main === "Thunderstorm" && (
                    <i
                      className="fa-solid fa-cloud-bolt"
                      style={{
                        padding: "36px 0px",
                        margin: "2px -33px 0px -29px",
                      }}
                    ></i>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="col-md-6 col-sm-12 p-0">
          <div
            style={{
              backgroundColor: "rgb(8 8 8 / 50%)",
              height: "89vh",
              opacity: "1",
            }}
          >
            <Form style={{ margin: "70px 60px 60px" }}>
              <Form.Select
                style={{ boxShadow: "none" }}
                onChange={(e) => setText(e.target.value)}
              >
                <option value="">---- Select Value ----</option>
                <option value="surat">Surat</option>
                <option value="mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="ahmedabad">Ahmedabad</option>
              </Form.Select>
            </Form>
            {!text ? (
              <h1 style={{ color: "#a3d4e7" }}>Data not Found</h1>
            ) : (
              <div style={{ margin: "60px" }}>
                <h4 style={{ color: "#a3d4e7", marginBottom: "25px" }}>
                  City Temperature
                </h4>
                <div className="city_temp">
                  <span style={{ float: "left" }}>temp:</span>
                  <span style={{ float: "right" }}>{city?.main?.temp}</span>
                </div>
                <div className="city_temp">
                  <span style={{ float: "left" }}>temp_min:</span>
                  <span style={{ float: "right" }}>{city?.main?.temp_min}</span>
                </div>
                <div className="city_temp">
                  <span style={{ float: "left" }}>temp_max:</span>
                  <span style={{ float: "right" }}>{city?.main?.temp_max}</span>
                </div>
                <hr style={{ color: "white" }}></hr>
                <h4
                  style={{
                    color: "#a3d4e7",
                    marginTop: "20px",
                    marginBottom: "25px",
                  }}
                >
                  Weather Details{" "}
                </h4>
                <div className="city_temp">
                  <span style={{ float: "left" }}>Cloudy:</span>
                  <span style={{ float: "right" }}>{city?.clouds?.all}%</span>
                </div>
                <div className="city_temp">
                  <span style={{ float: "left" }}>Humidity:</span>
                  <span style={{ float: "right" }}>
                    {city?.main?.humidity}%
                  </span>
                </div>
                <div className="city_temp">
                  <span style={{ float: "left" }}>Wind:</span>
                  <span style={{ float: "right" }}>
                    {city?.wind?.speed}km/h
                  </span>
                </div>
                {city?.rain ? (
                  <div className="city_temp">
                    <span style={{ float: "left" }}>Rain:</span>
                    <span style={{ float: "right" }}>{city?.rain["1h"]}</span>
                    {/* {city?.rain ?<> <span>Rain:<span><span>{city?.rain["1h"]}</span></> : ""} */}
                  </div>
                ) : (
                  ""
                )}

                {/* {city?.rain ? <p>Rain:{city?.rain["1h"]}</p> : ""} */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
}
