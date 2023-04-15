import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Header from "./Header";

function Order() {
  const [data, setData] = useState([]);
  let email = localStorage.getItem("email");
  const cookie = new Cookies();
  let token = cookie.get("jwt");
  const navigate = useNavigate();
  let url = "https://car-booking-back-end.vercel.app/book";
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        token: token,
        email: email,
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
          response.json().then((result) => setData(result));
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {console.log(data)}
      <Header />
      <div className="container orderbox" style={{ height: "88vh" }}>
        {data.map((items) => {
          return (
            <div className="order">
              <span>Car ID:{items.carID}</span>
              <span>Shift:{items.Shift}</span>
              <span>Car Type:{items.carType}</span>
              <span>Price:{items.price}</span>
              <span>No of hrs:{items.slotTiming}</span>
              <button
                onClick={() =>
                  navigate("/carview", {
                    state: items.carID,
                  })
                }
                style={{
                  background: "hotpink",
                  width: "90%",
                  marginTop: "10px",
                  color: "whitesmoke",
                }}
                className="btn "
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Order;
