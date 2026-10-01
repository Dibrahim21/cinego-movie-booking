import { useState } from "react";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState("default");

  let filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" || movie.genre === genre;

    return matchesSearch && matchesGenre;
  });

  if (sort === "priceLow") {
    filteredMovies.sort((a, b) => a.price - b.price);
  }

  if (sort === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="container py-5">

      <h1 className="fw-bold">Movies</h1>
      <p className="text-secondary">
        Discover movies and book your favourite show.
      </p>

      <div className="row g-3 my-4">

        <div className="col-md-6">
          <input
            className="form-control form-control-lg"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select form-select-lg"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>All</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Sci-Fi</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select form-select-lg"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

      </div>

      <div className="row">

        {filteredMovies.length === 0 ? (
          <div className="text-center py-5">
            <h4>No movies found</h4>
            <p className="text-secondary">
              Try another search.
            </p>
          </div>
        ) : (
          filteredMovies.map((movie) => (
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              key={movie.id}
            >
              <MovieCard movie={movie} />
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Movies;