import { Link } from "react-router-dom";
import { useState } from "react";

function MovieCard({ movie }) {
  const [liked, setLiked] = useState(() => {
    const list = JSON.parse(
      localStorage.getItem("cinegoWishlist") || "[]"
    );

    return list.some((item) => item.id === movie.id);
  });

  const toggleWishlist = () => {
    let list = JSON.parse(
      localStorage.getItem("cinegoWishlist") || "[]"
    );

    if (liked) {
      list = list.filter((item) => item.id !== movie.id);
    } else {
      list.push(movie);
    }

    localStorage.setItem("cinegoWishlist", JSON.stringify(list));
    setLiked(!liked);
  };

  return (
    <div className="card movie-card border-0 shadow-sm h-100">

      <div className="movie-image">
        <img src={movie.image} alt={movie.name} />

        <button
          className="wishlist-btn"
          onClick={toggleWishlist}
        >
          <i
            className={
              liked
                ? "bi bi-heart-fill text-danger"
                : "bi bi-heart"
            }
          ></i>
        </button>
      </div>

      <div className="card-body">

        <div className="d-flex justify-content-between">
          <h5 className="fw-bold">{movie.name}</h5>

          <span className="badge bg-success">
            ⭐ {movie.rating}
          </span>
        </div>

        <p className="text-secondary mb-1">
          {movie.language} • {movie.genre}
        </p>

        <p className="small text-secondary">
          {movie.duration}
        </p>

        <Link
          to={`/movie/${movie.id}`}
          className="btn btn-danger w-100"
        >
          Book Tickets
        </Link>

      </div>
    </div>
  );
}

export default MovieCard;