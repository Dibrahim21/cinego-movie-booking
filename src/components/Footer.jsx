import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">

        <div className="row">

          <div className="col-md-4 mb-4">
            <h3>
              <span className="text-danger">Cine</span>Go
            </h3>

            <p className="text-secondary">
              Your simple and convenient destination for
              discovering movies and booking cinema tickets.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>

            <Link to="/" className="footer-link">Home</Link>
            <Link to="/movies" className="footer-link">Movies</Link>
            <Link to="/theatres" className="footer-link">Theatres</Link>
            <Link to="/bookings" className="footer-link">My Bookings</Link>
          </div>

          <div className="col-md-4">
            <h5>Connect With Us</h5>

            <div className="fs-4 d-flex gap-3 mt-3">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>

        </div>

        <hr />

        <p className="text-center text-secondary mb-0">
          © 2026 CineGo. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;