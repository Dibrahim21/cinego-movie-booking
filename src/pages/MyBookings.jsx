import { Link } from "react-router-dom";

function MyBookings() {
  const bookings = JSON.parse(
    localStorage.getItem("cinegoBookings") || "[]"
  );

  return (
    <div className="container py-5">

      <h1 className="fw-bold">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="text-center py-5">
          <i className="bi bi-ticket-perforated display-1 text-secondary"></i>

          <h3 className="mt-3">
            No bookings yet
          </h3>

          <p className="text-secondary">
            Book a movie and your tickets will appear here.
          </p>

          <Link to="/movies" className="btn btn-danger">
            Browse Movies
          </Link>
        </div>
      ) : (
        <div className="row mt-4">

          {bookings.map((booking) => (
            <div className="col-md-6 mb-4" key={booking.orderId}>

              <div className="card border-0 shadow-sm">

                <div className="card-body">

                  <div className="d-flex justify-content-between">
                    <h4>{booking.movie.name}</h4>

                    <span className="badge bg-success">
                      Confirmed
                    </span>
                  </div>

                  <p className="text-secondary">
                    {booking.theatre}
                  </p>

                  <p>
                    <strong>Show:</strong> {booking.time}
                  </p>

                  <p>
                    <strong>Seats:</strong>{" "}
                    {booking.seats.join(", ")}
                  </p>

                  <p>
                    <strong>Booking ID:</strong>{" "}
                    {booking.orderId}
                  </p>

                  <hr />

                  <strong>
                    Total: ₹{booking.total + 20}
                  </strong>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default MyBookings;