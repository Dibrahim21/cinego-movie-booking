import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("cinegoUser") || "null"
  );

  const bookings = JSON.parse(
    localStorage.getItem("cinegoBookings") || "[]"
  );

  const wishlist = JSON.parse(
    localStorage.getItem("cinegoWishlist") || "[]"
  );

  const logout = () => {
    localStorage.removeItem("cinegoUser");
    navigate("/login");
  };

  return (
    <div className="container py-5">

      <h1 className="fw-bold mb-4">
        My Profile
      </h1>

      <div className="row">

        <div className="col-md-4">
          <div className="card border-0 shadow-sm text-center p-4">

            <div className="profile-icon">
              <i className="bi bi-person"></i>
            </div>

            <h4 className="mt-3">
              {user?.name || "Guest User"}
            </h4>

            <p className="text-secondary">
              {user?.email || "Not logged in"}
            </p>

            <button
              className="btn btn-outline-danger"
              onClick={logout}
            >
              Logout
            </button>

          </div>
        </div>

        <div className="col-md-8">

          <div className="row">

            <div className="col-md-6 mb-4">
              <div className="stat-card">
                <i className="bi bi-ticket-perforated"></i>
                <h3>{bookings.length}</h3>
                <p>My Bookings</p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="stat-card">
                <i className="bi bi-heart"></i>
                <h3>{wishlist.length}</h3>
                <p>Wishlist Movies</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;