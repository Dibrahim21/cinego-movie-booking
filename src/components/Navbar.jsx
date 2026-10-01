import { Link } from "react-router-dom";

function Navbar() {
  const bookings = JSON.parse(
    localStorage.getItem("cinegoBookings") || "[]"
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">

        <Link to="/" className="navbar-brand fw-bold fs-3">
          <span className="text-danger">Cine</span>Go
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav me-auto ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/movies">Movies</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/theatres">
                Theatres
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/bookings">
                My Bookings
                {bookings.length > 0 && (
                  <span className="badge bg-danger ms-1">
                    {bookings.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <span className="text-light">
              <i className="bi bi-geo-alt-fill text-danger"></i>
              Mumbai
            </span>

            <Link to="/profile" className="text-white fs-5">
              <i className="bi bi-person-circle"></i>
            </Link>

            <Link to="/login" className="btn btn-danger">
              Login
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;