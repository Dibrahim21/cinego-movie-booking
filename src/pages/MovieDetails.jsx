import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";
import ShowtimeCard from "../components/ShowtimeCard";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="container py-5 text-center">
        <h2>Movie not found</h2>
      </div>
    );
  }

  const theatres = [
    "PVR INOX - Phoenix Marketcity",
    "Cinepolis - Viviana Mall",
    "Miraj Cinemas - R City Mall"
  ];

  const times = ["10:30 AM", "1:30 PM", "6:30 PM", "9:30 PM"];

  return (
    <div className="container py-5">

      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="row">

        <div className="col-md-4">
          <img
            src={movie.image}
            alt={movie.name}
            className="details-image"
          />
        </div>

        <div className="col-md-8">

          <span className="badge bg-danger">
            {movie.genre}
          </span>

          <h1 className="fw-bold mt-3">
            {movie.name}
          </h1>

          <p className="text-secondary">
            {movie.language} • {movie.duration}
          </p>

          <h5>
            ⭐ {movie.rating} / 5
          </h5>

          <p className="mt-4">
            {movie.description}
          </p>

          <hr />

          <h4 className="fw-bold mb-4">
            Select Theatre & Showtime
          </h4>

          {theatres.map((theatre) => (
            <div
              className="card border-0 shadow-sm mb-4"
              key={theatre}
            >
              <div className="card-body">

                <h5 className="fw-bold">
                  <i className="bi bi-building text-danger"></i>{" "}
                  {theatre}
                </h5>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  {times.map((time) => (
                    <ShowtimeCard
                      key={time}
                      movieId={movie.id}
                      theatre={theatre}
                      time={time}
                      price={movie.price}
                    />
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default MovieDetails;