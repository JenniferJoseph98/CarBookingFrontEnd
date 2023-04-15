import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import "./book.css";
import { useState } from "react";
import CarBook from "./CarBook";
function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const data = location.state;
  function closeModalsNow() {
    setModal(false);
  }
  return (
    <>
      <Header />
      <div className="container detailsPage" style={{ width: "100%" }}>
        <div className="classes" style={{ display: "flex" }}>
          <img className="imgEach" src={data.image} />
          <div className="divTag contents">
            <p id="headingData" style={{ fontSize: "2rem", color: "hotpink" }}>
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
                  width: "40%",
                  marginTop: "10px",
                  color: "whitesmoke",
                }}
                className="btn "
              >
                Back
              </button>
              <button
                onClick={() => setModal(true)}
                style={{
                  background: "hotpink",
                  width: "40%",
                  marginTop: "10px",
                  color: "whitesmoke",
                }}
                className="btn "
              >
                Book Slot
              </button>
            </div>
          </div>
        </div>
      </div>
      {modal && <CarBook data={data} closeModalsNow={closeModalsNow} />}
    </>
  );
}

export default Details;
