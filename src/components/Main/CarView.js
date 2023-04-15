import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

import Cookies from "universal-cookie";
function CarView() {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state;
  const [data, setData] = useState({
    details: "",
    image: "",
    name: "",
    price: 0,
    _id: id,
  });
  let url = `https://car-booking-back-end.vercel.app/car/${id}`;
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
            setData({
              ...data,
              details: result.details,
              image: result.image,
              name: result.name,
              price: result.price,
            });
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header />
      {data.image.length != 0 ? (
        <>
          <div className="container detailsPage" style={{ width: "100%" }}>
            <div className="classes" style={{ display: "flex" }}>
              <img className="imgEach" src={data.image} />
              <div className="divTag contents">
                <p
                  id="headingData"
                  style={{ fontSize: "2rem", color: "hotpink" }}
                >
                  {data.name}
                </p>
                <p
                  className="contents"
                  style={{ fontSize: "1.2rem", color: "gray" }}
                >
                  {data.details}
                </p>
                <span
                  className="contents"
                  style={{ fontSize: "1.6rem", color: " #c471f5" }}
                >
                  ₹{data.price} per hour
                </span>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <button
                    onClick={() => {
                      navigate(-1);
                    }}
                    style={{
                      background: "hotpink",
                      width: "100%",
                      marginTop: "10px",
                      color: "whitesmoke",
                    }}
                    className="btn "
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              height: "40vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <>
              <button
                class="btn text-center btn-primary"
                type="button"
                disabled
              >
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Loading...</span>
              </button>
              <button class="btn btn-primary" type="button" disabled>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            </>
          </div>
        </>
      )}
    </>
  );
}

export default CarView;
