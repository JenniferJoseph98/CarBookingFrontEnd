import React from "react";
import { useEffect } from "react";
import Cookies from "universal-cookie/cjs/Cookies";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Cars() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const cookie = new Cookies();
  let url = "https://car-booking-back-end.vercel.app/car";
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        token: cookie.get("jwt"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.statusText === "Forbidden") {
          alert("Session over");
          navigate("/");
        } else {
          response.json().then((result) => {
            setData(result);
            console.log(result);
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      className="container"
      style={{
        width: "100%",
        justifyContent: "space-evenly",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {data.map((element) => {
        return (
          <div
            onClick={() => navigate("/details", { state: element })}
            className="cardsIn"
            style={{
              width: "350px",
              display: "flex",
              justifyContent: "space-between",
              height: "450px",
              borderRadius: "25px",
              marginTop: "25px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
              flexDirection: "column",
              paddingBottom: "25px",
            }}
          >
            <img
              src={element.image}
              style={{
                width: "100%",
                height: "70%",
                borderTopRightRadius: "25px",
                borderTopLeftRadius: "25px",
              }}
            />
            <span style={{ fontSize: "1.5rem" }}>{element.name}</span>
            <span style={{ fontSize: "1.5rem", color: "orange" }}>
              ₹{element.price} per hour
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Cars;
