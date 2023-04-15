import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Main from "./components/Main/Main";
import BookingSlot from "./components/Main/BookingSlot";
import Details from "./components/Main/Details";
import Order from "./components/Main/Order";
import CarBook from "./components/Main/CarBook";
import ThanksPage from "./components/Main/ThanksPage";
import Protected from "./Protected";
import CarView from "./components/Main/CarView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Register />} path="/register" />
        <Route
          element={
            <Protected>
              <Main />
            </Protected>
          }
          path="/main"
        />
        <Route
          element={
            <Protected>
              <BookingSlot />
            </Protected>
          }
          path="/book"
        />
        <Route
          element={
            <Protected>
              <Details />
            </Protected>
          }
          path="/details"
        />

        <Route
          element={
            <Protected>
              <CarBook />
            </Protected>
          }
          path="/bookCar"
        />
        <Route
          element={
            <Protected>
              <ThanksPage />
            </Protected>
          }
          path="/thanks"
        />
        <Route
          element={
            <Protected>
              <Order />
            </Protected>
          }
          path="/order"
        />
        <Route
          element={
            <Protected>
              <CarView />
            </Protected>
          }
          path="/carview"
        />
      </Routes>
    </div>
  );
}

export default App;
