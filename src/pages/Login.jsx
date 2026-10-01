import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    localStorage.setItem(
      "cinegoUser",
      JSON.stringify({
        name: email.split("@")[0],
        email
      })
    );

    navigate("/profile");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="text-center mb-4">
          <h2 className="fw-bold">
            Welcome to <span className="text-danger">CineGo</span>
          </h2>

          <p className="text-secondary">
            Login to manage your bookings
          </p>
        </div>

        <form onSubmit={login}>

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text-end mb-3">
            <button
              type="button"
              className="btn btn-link p-0 text-danger"
            >
              Forgot Password?
            </button>
          </div>

          <button className="btn btn-danger w-100">
            Login
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary w-100 mt-3"
          >
            <i className="bi bi-google"></i>{" "}
            Continue with Google
          </button>

        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-danger">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;