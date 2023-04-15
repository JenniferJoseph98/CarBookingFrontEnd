import Modal from "react-modal";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CarBook({ data, closeModalsNow }) {
  let url = "https://car-booking-back-end.vercel.app/book";
  const [paymentType, setPaymentType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const navigate = useNavigate();
  function closeModal() {
    if (startDate && startTime && endDate && endTime) {
      setModalIsOpen(false);
      closeModalsNow();
      bookSlot();
    } else {
      alert("Enter all required fields");
    }
  }

  const [endTime, setEndTime] = useState("");
  let today = new Date().toISOString().substr(0, 10);
  let tomorrow = today.split("-");
  tomorrow[2] = parseInt(tomorrow[2]) + 1;
  today = tomorrow.join("-");
  function getDuration(startDateStr, startTimeStr, endDateStr, endTimeStr) {
    console.log(startDateStr, startTimeStr, endDateStr, endTimeStr);
    const startDate = new Date(`${startDateStr}T${startTimeStr}:00`);
    const endDate = new Date(`${endDateStr}T${endTimeStr}:00`);
    const timeDiffMillis = endDate - startDate;
    const totalMinutes = Math.ceil(
      Math.floor(timeDiffMillis / (1000 * 60)) / 60
    );
    return totalMinutes;
  }
  function bookSlot() {
    let slotTime = getDuration(startDate, startTime, endDate, endTime);
    axios
      .post(url, {
        price: slotTime * data.price,
        userEmail: localStorage.getItem("email"),
        paymentType: paymentType,
        carID: data._id,
        slotTiming: slotTime,
        details: `Hi ${localStorage.getItem("email").split("@")[0]},
Thanks for Booking our car.The car name is ${
          data.name
        }.The price of the car is  ₹${
          data.price
        } per hour. The slot timing is from ${startDate} at ${startTime} to ${endDate} at ${endTime}
Kindly reach out us , If you have any doubts.

Thanks and regards!
Jennifer Joseph
      `,
      })
      .then((res) => {
        alert("Car Booked");
        navigate("/thanks");
      })
      .catch((err) => alert("Unable to book"));
  }
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <h5>Booking details</h5>
      <div style={{ width: "80%" }}>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Start Date
            </span>
          </div>
          <input
            type="date"
            class="form-control"
            aria-describedby="basic-addon2"
            min={today}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              End Date
            </span>
          </div>
          <input
            type="date"
            class="form-control"
            aria-describedby="basic-addon2"
            min={today}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Start Time
            </span>
          </div>
          <input
            class="form-control"
            aria-describedby="basic-addon2"
            type="time"
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              End {"   "}Time
            </span>
          </div>
          <input
            type="time"
            onChange={(e) => setEndTime(e.target.value)}
            class="form-control"
            aria-describedby="basic-addon2"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">
              Payment Type
            </label>
          </div>
          <select
            onChange={(e) => setPaymentType(e.target.value)}
            class="custom-select"
            id="inputGroupSelect01"
          >
            <option selected>Choose...</option>
            <option value="Cash">Cash</option>
            <option value="Online Payment">Online Payment</option>
          </select>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <button
            onClick={() => closeModalsNow()}
            style={{
              width: "45%",
              color: "#f5576c",
              backgroundColor: "white",
              fontSize: "1rem",
              fontWeight: "bolder",
            }}
            type="button"
            class="btn btn-sm"
          >
            Cancel
          </button>
          <button
            onClick={closeModal}
            style={{
              width: "45%",
              color: "#f5576c",
              backgroundColor: "white",
              fontSize: "1rem",
              fontWeight: "bolder",
            }}
            type="button"
            class="btn btn-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default CarBook;
