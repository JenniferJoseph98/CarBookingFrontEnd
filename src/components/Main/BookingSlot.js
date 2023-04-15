import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./book.css";
import Cookies from "universal-cookie/cjs/Cookies";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Cars from "./Cars";
function BookingSlot() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  function closeModal() {
    if (stateOfUser !== "" && districtOfUser !== "") {
      setModalIsOpen(false);
    } else {
      alert("Set State and district");
    }
  }
  const [stateOfUser, setStateOfUser] = useState(null);
  const [districtOfUser, setDistrictOfUser] = useState("");
  let url = "https://car-booking-back-end.vercel.app/state";
  const cookie = new Cookies();
  const navigate = useNavigate();
  const [stateVal, setStateVal] = useState([]);
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
          response.json().then((result) => setStateVal(result.state));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                State
              </label>
            </div>
            <select
              class="custom-select"
              id="inputGroupSelect01"
              onChange={(e) => {
                setStateOfUser(e.target.value);
                console.log(stateOfUser);
              }}
            >
              <option selected>Choose One</option>
              {stateVal.map((items) => {
                return <option value={items.state}>{items.state}</option>;
              })}
            </select>
          </div>
          {stateOfUser != null && (
            <>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    District
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  onChange={(e) => {
                    setDistrictOfUser(e.target.value);
                  }}
                >
                  <option selected>Choose One</option>
                  {stateVal
                    .find((ele) => ele.state === stateOfUser)
                    .districts.map((element) => {
                      return <option value={element}>{element}</option>;
                    })}
                </select>
              </div>
            </>
          )}
          <button
            onClick={closeModal}
            style={{
              width: "100%",
              color: "#f5576c",
              backgroundColor: "white",
              fontSize: "1rem",
              fontWeight: "bolder",
            }}
            type="button"
            class="btn btn-sm"
          >
            Okay
          </button>
        </Modal>
      </div>
      {!modalIsOpen && (
        <>
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <button
              onClick={() => {
                navigate(-1);
              }}
              style={{
                background: "hotpink",

                marginTop: "10px",
                color: "whitesmoke",
                fontSize: "1.2rem",
              }}
              className="btn "
            >
              Back
            </button>
            <h1
              style={{
                textAlign: "end",
                marginTop: "25px",
                marginBottom: "25px",
              }}
            >
              {stateOfUser}, {districtOfUser}
            </h1>
          </div>
          <Cars />
        </>
      )}
    </>
  );
}

export default BookingSlot;
