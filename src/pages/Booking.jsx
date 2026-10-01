import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();

  const draft = JSON.parse(
    localStorage.getItem("cinegoBookingDraft") || "null"
  );

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    payment: "UPI"
  });

  if (!draft) {
    return (
      <div className="container py-5 text-center">
        <h2>No booking selected</h2>
        <button
          className="btn btn-danger mt-3"
          onClick={() => navigate("/movies")}
        >
          Browse Movies
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    if (!form.name || !form.mobile || !form.email) {
      alert("Please fill all details.");
      return;
    }

    const order = {
      ...draft,
      customer: form,
      orderId: "CG" + Date.now().toString().slice(-6),
      date: new Date().toLocaleDateString()
    };

    const bookings = JSON.parse(
      localStorage.getItem("cinegoBookings") || "[]"
    );

    bookings.push(order);

    localStorage.setItem(
      "cinegoBookings",
      JSON.stringify(bookings)
    );

    localStorage.setItem(
      "cinegoLastBooking",
      JSON.stringify(order)
    );

    localStorage.removeItem("cinegoBookingDraft");

    navigate("/success");
  };

  return (
    <div className="container py-5">

      <h1 className="fw-bold mb-4">
        Complete Your Booking
      </h1>

      <div className="row g-4">

        <div className="col-lg-7">

          <form onSubmit={placeOrder}>

            <div className="card border-0 shadow-sm p-4">

              <h4 className="fw-bold mb-4">
                Customer Details
              </h4>

              <input
                name="name"
                className="form-control mb-3"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                name="mobile"
                className="form-control mb-3"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
              />

              <input
                name="email"
                type="email"
                className="form-control mb-4"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />

              <h5 className="fw-bold">
                Payment Method
              </h5>

              <select
                name="payment"
                className="form-select"
                value={form.payment}
                onChange={handleChange}
              >
                <option>UPI</option>
                <option>Credit / Debit Card</option>
                <option>Cash at Counter</option>
              </select>

              <button className="btn btn-danger w-100 mt-4">
                Place Booking
              </button>

            </div>

          </form>

        </div>

        <div className="col-lg-5">

          <div className="card border-0 shadow-sm p-4">

            <h4 className="fw-bold mb-4">
              Booking Summary
            </h4>

            <h5>{draft.movie.name}</h5>

            <p className="text-secondary">
              {draft.theatre}
            </p>

            <p>
              <strong>Show:</strong> {draft.time}
            </p>

            <p>
              <strong>Seats:</strong>{" "}
              {draft.seats.join(", ")}
            </p>

            <hr />

            <div className="d-flex justify-content-between">
              <span>Ticket Price</span>
              <span>₹{draft.total}</span>
            </div>

            <div className="d-flex justify-content-between mt-2">
              <span>Booking Fee</span>
              <span>₹20</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <strong>Total</strong>
              <strong className="text-danger">
                ₹{draft.total + 20}
              </strong>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Booking;