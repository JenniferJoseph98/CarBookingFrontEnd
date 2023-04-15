import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./design.css";
import Cookies from "universal-cookie/cjs/Cookies";
import Header from "./Header";
function Main() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  let url = "https://car-booking-back-end.vercel.app/car";
 
  return (
    <div
      style={{
        backgroundSize: "100% 100%",

        height: "100vh",
      }}
    >
      <Header />

      <div class="w3-row-padding w3-theme">
        <div class="w3-third w3-section">
          <div class="w3-card-4">
            <img
              alt="car"
              src="https://i.redd.it/ti3p2iau8ny11.jpg"
              style={{ width: "100%" }}
            />
            <div class="w3-container w3-white ">
              <p
                className="para"
                style={{ textAlign: "justify", marginTop: "10px" }}
              >
                Welcome to our car rental booking application! We're thrilled
                that you've chosen us for your car rental needs. With our app,
                you can easily rent a car and get on the road in no time. From
                compact cars to luxury vehicles, we've got a car to suit your
                budget and preferences.we guarantee that you will find the
                perfect car for your needs So why wait? Start exploring our app
                today and book your dream car for your next trip.
              </p>
            </div>
          </div>
        </div>
        <div class="w3-third w3-section">
          <div class="w3-card-4">
            <img
              alt="car"
              src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?cs=srgb&dl=asphalt-auto-automobile-244206.jpg&fm=jpg"
              style={{ width: "100%" }}
            />
            <div class="w3-container w3-white">
              <p
                className="para"
                style={{ textAlign: "justify", marginTop: "10px" }}
              >
                Thank you for choosing our car rental booking application! We
                know that finding the right car for your trip can be stressful,
                but with our app, it's easy. Our user-friendly interface lets
                you browse through a range of vehicles and compare prices to
                find the best deal. With our hassle-free booking process, you
                can rent a car in just a few clicks. So go ahead, book your car
                rental today and get ready to hit the road.
              </p>
            </div>
          </div>
        </div>
        <div class="w3-third w3-section">
          <div class="w3-card-4">
            <img
              alt="car"
              src="https://i.redd.it/sra4y21iouo31.jpg"
              style={{ width: "100%" }}
            />
            <div class="w3-container w3-white">
              <p
                className="para"
                style={{ textAlign: "justify", marginTop: "10px" }}
              >
                Welcome to the world of hassle-free car rental with our booking
                application! Our app offers a seamless booking experience, so
                you can focus on enjoying your trip. With a wide range of
                vehicles and you're sure to find the perfect car for your needs.
                Plus, with our flexible rental options and affordable prices,
                you can rent a car on your terms. So what are you waiting for?
                Lets start your car rental journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="id01" class="w3-modal">
        <div class="w3-modal-content  w3-card-4" style={{ width: "50%" }}>
          <header class="w3-container w3-teal">
            <span
              onClick={() => {
                document.getElementById("id01").style.display = "none";
              }}
              class="w3-button w3-display-topright"
            >
              &times;
            </span>
            <h2>Hello</h2>
          </header>
          <div class="w3-container">
            <p>
              Thank you for choosing our booking application. We appreciate your
              trust in our services.
            </p>
            <p>
              We are grateful for your support and trust in our booking
              application. We look forward to providing you with a seamless and
              satisfying experience.
            </p>
          </div>
          <footer class="w3-container w3-teal">
            <p>Thanks again</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Main;
