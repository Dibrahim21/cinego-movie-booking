import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";
import ShowtimeCard from "../components/ShowtimeCard";

function TheatreShows() {
  const { name } = useParams();

  const theatreName = decodeURIComponent(name);

  const times = [
    "10:30 AM",
    "1:30 PM",
    "6:30 PM",
    "9:30 PM"
  ];

  const shows = movies.slice(0, 8);

  return (
    <div className="container py-5">

      <Link
        to="/theatres"
        className="btn btn-outline-secondary mb-4"
      >
        ← Back to Theatres
      </Link>

      <div className="theatre-header mb-5">

        <div>
          <span className="badge bg-danger mb-2">
            NOW SHOWING
          </span>

          <h1 className="fw-bold mb-2">
            {theatreName}
          </h1>

          <p className="text-secondary mb-0">
            <i className="bi bi-geo-alt me-1"></i>
            Mumbai • Select your movie and showtime
          </p>
        </div>

      </div>

      <h3 className="fw-bold mb-4">
        Movies & Showtimes
      </h3>

      {shows.map((movie) => (
        <div
          className="card theatre-show-card border-0 shadow-sm mb-4"
          key={movie.id}
        >

          <div className="card-body p-4">

            <div className="row align-items-center">

              {/* Movie Image */}
              <div className="col-md-2">

                <img
                  src={movie.image}
                  alt={movie.name}
                  className="theatre-movie-image"
                />

              </div>

              {/* Movie Details */}
              <div className="col-md-4 mt-3 mt-md-0">

                <h4 className="fw-bold">
                  {movie.name}
                </h4>

                <p className="text-secondary mb-2">
                  {movie.language} • {movie.genre}
                </p>

                <div className="d-flex gap-2 align-items-center">

                  <span className="badge bg-success">
                    ⭐ {movie.rating}
                  </span>

                  <span className="text-secondary small">
                    {movie.duration}
                  </span>

                </div>

              </div>

              {/* Showtimes */}
              <div className="col-md-6 mt-4 mt-md-0">

                <h6 className="fw-bold mb-3">
                  Today's Shows
                </h6>

                <div className="d-flex flex-wrap gap-2">

                  {times.map((time) => (
                    <ShowtimeCard
                      key={time}
                      movieId={movie.id}
                      theatre={theatreName}
                      time={time}
                      price={movie.price}
                    />
                  ))}

                </div>

                <p className="text-muted small mt-3 mb-0">
                  Select a showtime to choose your seats
                </p>

              </div>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
}

export default TheatreShows;