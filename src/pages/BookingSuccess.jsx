import { useNavigate } from "react-router-dom";

function BookingSuccess() {
  const navigate = useNavigate();

  const booking = JSON.parse(
    localStorage.getItem("cinegoLastBooking") || "null"
  );

  if (!booking) {
    return (
      <div className="container py-5 text-center">
        <h2>No booking found.</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="success-box text-center">

        <div className="success-icon">
          <i className="bi bi-check-lg"></i>
        </div>

        <h1 className="fw-bold mt-4">
          Booking Confirmed!
        </h1>

        <p className="text-secondary">
          Your movie tickets have been booked successfully.
        </p>

        <div className="card border-0 shadow-sm text-start p-4 mt-4">

          <h4>{booking.movie.name}</h4>

          <p className="mb-1">
            <strong>Theatre:</strong> {booking.theatre}
          </p>

          <p className="mb-1">
            <strong>Show:</strong> {booking.time}
          </p>

          <p className="mb-1">
            <strong>Seats:</strong>{" "}
            {booking.seats.join(", ")}
          </p>

          <p className="mb-1">
            <strong>Booking ID:</strong>{" "}
            {booking.orderId}
          </p>

          <p className="mb-0">
            <strong>Total:</strong>{" "}
            ₹{booking.total + 20}
          </p>

        </div>

        <div className="d-flex justify-content-center gap-3 mt-4">

          <button
            className="btn btn-danger"
            onClick={() => navigate("/movies")}
          >
            Continue Shopping
          </button>

          <button
            className="btn btn-outline-danger"
            onClick={() => navigate("/bookings")}
          >
            My Bookings
          </button>

        </div>

      </div>

    </div>
  );
}

export default BookingSuccess;