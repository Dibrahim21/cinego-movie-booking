import { Link } from "react-router-dom";

function ShowtimeCard({ movieId, theatre, time, price }) {
  const query = new URLSearchParams({
    movie: movieId,
    theatre,
    time,
    price
  }).toString();

  return (
    <Link
      to={`/seats?${query}`}
      className="btn btn-outline-danger showtime-btn"
    >
      {time}
      <small className="d-block text-secondary">
        ₹{price}
      </small>
    </Link>
  );
}

export default ShowtimeCard;