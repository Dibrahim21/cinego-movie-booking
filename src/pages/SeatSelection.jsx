import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Seat from "../components/Seat";
import movies from "../data/movies";

function SeatSelection() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const movieId = Number(params.get("movie"));
  const theatre = params.get("theatre");
  const time = params.get("time");
  const price = Number(params.get("price"));

  const movie = movies.find((item) => item.id === movieId);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = ["A", "B", "C", "D", "E"];
  const bookedSeats = ["A3", "B5", "C2", "D7"];

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((item) => item !== seat)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const total = selectedSeats.length * price;

  const proceed = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    const draft = {
      movie,
      theatre,
      time,
      seats: selectedSeats,
      price,
      total
    };

    localStorage.setItem(
      "cinegoBookingDraft",
      JSON.stringify(draft)
    );

    navigate("/booking");
  };

  return (
    <div className="container py-5">

      <h2 className="fw-bold">Select Your Seats</h2>

      <div className="text-secondary mb-4">
        {movie?.name} • {theatre} • {time}
      </div>

      <div className="screen">
        SCREEN
      </div>

      <div className="seat-container">

        {rows.map((row) => (
          <div className="seat-row" key={row}>

            <span className="row-name">{row}</span>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => {
              const seat = `${row}${number}`;

              return (
                <Seat
                  key={seat}
                  seat={seat}
                  selected={selectedSeats.includes(seat)}
                  booked={bookedSeats.includes(seat)}
                  onClick={() => toggleSeat(seat)}
                />
              );
            })}

          </div>
        ))}

      </div>

      <div className="d-flex justify-content-center gap-4 my-4">

        <span>
          <span className="legend available"></span>
          Available
        </span>

        <span>
          <span className="legend selected"></span>
          Selected
        </span>

        <span>
          <span className="legend booked"></span>
          Booked
        </span>

      </div>

      <div className="card border-0 shadow-sm p-4">

        <div className="d-flex justify-content-between">
          <div>
            <strong>Selected Seats</strong>
            <p className="text-secondary mb-0">
              {selectedSeats.length > 0
                ? selectedSeats.join(", ")
                : "None"}
            </p>
          </div>

          <div className="text-end">
            <strong>Total</strong>
            <h3 className="text-danger">
              ₹{total}
            </h3>
          </div>
        </div>

        <button
          className="btn btn-danger mt-3"
          onClick={proceed}
        >
          Proceed to Booking
        </button>

      </div>

    </div>
  );
}

export default SeatSelection;