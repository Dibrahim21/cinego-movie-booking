import { Link } from "react-router-dom";

function TheatreCard({ theatre }) {
  return (
    <div className="card theatre-card border-0 shadow-sm h-100">
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-start">
          <h5 className="fw-bold mb-0">
            <i className="bi bi-building text-danger me-2"></i>
            {theatre.name}
          </h5>

          <span className="badge bg-success">
            ⭐ {theatre.rating}
          </span>
        </div>

        <p className="text-secondary mt-3 mb-2">
          <i className="bi bi-geo-alt me-1"></i>
          {theatre.location}
        </p>

        <p className="text-muted small">
          {theatre.description}
        </p>

        <Link
          to={`/theatre/${encodeURIComponent(theatre.name)}`}
          className="btn btn-outline-danger w-100 mt-2"
        >
          View Shows
        </Link>

      </div>
    </div>
  );
}

export default TheatreCard;