import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Theatres from "./pages/Theatres";
import TheatreShows from "./pages/TheatreShows";
import Booking from "./pages/Booking";
import SeatSelection from "./pages/SeatSelection";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import MyBookings from "./pages/MyBookings";
import BookingSuccess from "./pages/BookingSuccess";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/movies"
            element={<Movies />}
          />

          <Route
            path="/movie/:id"
            element={<MovieDetails />}
          />

          <Route
            path="/theatres"
            element={<Theatres />}
          />

          <Route
            path="/theatre/:name"
            element={<TheatreShows />}
          />

          <Route
            path="/seats"
            element={<SeatSelection />}
          />

          <Route
            path="/booking"
            element={<Booking />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/bookings"
            element={<MyBookings />}
          />

          <Route
            path="/success"
            element={<BookingSuccess />}
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;