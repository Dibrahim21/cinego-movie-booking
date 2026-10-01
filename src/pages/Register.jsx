import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const register = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.mobile ||
      !form.password
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    localStorage.setItem(
      "cinegoUser",
      JSON.stringify({
        name: form.name,
        email: form.email,
        mobile: form.mobile
      })
    );

    navigate("/profile");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h2 className="fw-bold text-center">
          Create Account
        </h2>

        <p className="text-secondary text-center mb-4">
          Join CineGo today
        </p>

        <form onSubmit={register}>

          <input
            name="name"
            className="form-control mb-3"
            placeholder="Full Name"
            onChange={change}
          />

          <input
            name="email"
            type="email"
            className="form-control mb-3"
            placeholder="Email Address"
            onChange={change}
          />

          <input
            name="mobile"
            className="form-control mb-3"
            placeholder="Mobile Number"
            onChange={change}
          />

          <input
            name="password"
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={change}
          />

          <input
            name="confirmPassword"
            type="password"
            className="form-control mb-3"
            placeholder="Confirm Password"
            onChange={change}
          />

          <button className="btn btn-danger w-100">
            Create Account
          </button>

        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-danger">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;