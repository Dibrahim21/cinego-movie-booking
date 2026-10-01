import { useNavigate } from "react-router-dom";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";
import TheatreCard from "../components/TheatreCard";

function Home() {
  const navigate = useNavigate();

  const theatres = [
    {
      name: "PVR INOX",
      location: "Phoenix Marketcity, Kurla",
      rating: 4.6,
      description: "Premium screens, recliners and great sound."
    },
    {
      name: "Cinepolis",
      location: "Viviana Mall, Thane",
      rating: 4.5,
      description: "Luxury cinema experience with modern screens."
    },
    {
      name: "Miraj Cinemas",
      location: "R City Mall, Ghatkopar",
      rating: 4.3,
      description: "Comfortable seating and affordable tickets."
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7">
              <span className="badge bg-danger mb-3">
                MOVIE TICKETS MADE SIMPLE
              </span>

              <h1 className="display-3 fw-bold">
                Your Movie Night
                <br />
                Starts Here.
              </h1>

              <p className="lead text-secondary mt-3">
                Discover movies, theatres and showtimes.
                Book your favourite seats in just a few clicks.
              </p>

              <div className="d-flex gap-3 mt-4">
                <button
                  className="btn btn-danger btn-lg"
                  onClick={() => navigate("/movies")}
                >
                  Explore Movies
                </button>

                <button
                  className="btn btn-outline-light btn-lg"
                  onClick={() => navigate("/theatres")}
                >
                  Find Theatres
                </button>
              </div>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900"
                alt="Cinema"
                className="hero-image"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="container py-5">
        <div className="row text-center">

          <div className="col-md-4">
            <h2 className="fw-bold text-danger">10K+</h2>
            <p className="text-secondary">Happy Customers</p>
          </div>

          <div className="col-md-4">
            <h2 className="fw-bold text-danger">500+</h2>
            <p className="text-secondary">Movies & Shows</p>
          </div>

          <div className="col-md-4">
            <h2 className="fw-bold text-danger">100+</h2>
            <p className="text-secondary">Partner Theatres</p>
          </div>

        </div>
      </section>

      {/* Movies */}
      <section className="container py-4">

        <div className="section-heading">
          <div>
            <h2 className="fw-bold">Recommended Movies</h2>
            <p className="text-secondary">
              Popular movies you can watch today
            </p>
          </div>

          <button
            className="btn btn-outline-danger"
            onClick={() => navigate("/movies")}
          >
            View All
          </button>
        </div>

        <div className="row">
          {movies.slice(0, 8).map((movie) => (
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              key={movie.id}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

      </section>

      {/* Offer */}
      <section className="container py-5">
        <div className="offer-banner">

          <div>
            <span className="badge bg-light text-danger mb-2">
              CINEGO OFFERS
            </span>

            <h2 className="fw-bold">
              Movie nights just got better.
            </h2>

            <p className="mb-0">
              Get exciting offers on selected shows.
            </p>
          </div>

          <button
            className="btn btn-light text-danger fw-bold"
            onClick={() => navigate("/movies")}
          >
            Book Now
          </button>

        </div>
      </section>

      {/* Theatres */}
      <section className="container py-5">

        <h2 className="fw-bold mb-1">
          Popular Theatres
        </h2>

        <p className="text-secondary mb-4">
          Find a cinema near you
        </p>

        <div className="row">
          {theatres.map((theatre) => (
            <div className="col-md-4 mb-4" key={theatre.name}>
              <TheatreCard theatre={theatre} />
            </div>
          ))}
        </div>

      </section>

      {/* Why CineGo */}
      <section className="why-section py-5">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Why Choose CineGo?
          </h2>

          <div className="row text-center">

            <div className="col-md-3 mb-4">
              <i className="bi bi-ticket-perforated feature-icon"></i>
              <h5>Easy Booking</h5>
              <p className="text-secondary">
                Book tickets in just a few clicks.
              </p>
            </div>

            <div className="col-md-3 mb-4">
              <i className="bi bi-geo-alt feature-icon"></i>
              <h5>Nearby Theatres</h5>
              <p className="text-secondary">
                Discover cinemas around you.
              </p>
            </div>

            <div className="col-md-3 mb-4">
              <i className="bi bi-shield-check feature-icon"></i>
              <h5>Secure Booking</h5>
              <p className="text-secondary">
                Your booking details stay safe.
              </p>
            </div>

            <div className="col-md-3 mb-4">
              <i className="bi bi-phone feature-icon"></i>
              <h5>Mobile Friendly</h5>
              <p className="text-secondary">
                Works smoothly on every screen.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Home;