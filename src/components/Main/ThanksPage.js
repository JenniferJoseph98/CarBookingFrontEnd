import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function ThanksPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/main"), 5000);
  }, [navigate]);
  return (
    <div>
      <Header />
      <div
        className="container"
        style={{
          width: "100%",
          height: "89vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div class="w3-card-4" style={{ width: "50%" }}>
          <header
            class="w3-container w3-blue"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Thanks for Choosing us!</p>
          </header>

          <div class="w3-container">
            <p>
              Thank you for choosing our car booking service. We are thrilled to
              have you as our customer and we appreciate your trust in us. We
              are committed to providing a safe, reliable, and enjoyable
              transportation experience, and we hope you have a wonderful
              journey with us. We look forward to serving you again in the
              future
            </p>
          </div>

          <footer
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            class="w3-container w3-blue"
          >
            <p>Happy Journey</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ThanksPage;
