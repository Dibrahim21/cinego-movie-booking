import TheatreCard from "../components/TheatreCard";

function Theatres() {
  const theatres = [
    {
      name: "PVR INOX",
      location: "Phoenix Marketcity, Kurla",
      rating: 4.6,
      description: "Premium screens and comfortable recliners."
    },
    {
      name: "Cinepolis",
      location: "Viviana Mall, Thane",
      rating: 4.5,
      description: "Luxury cinema experience."
    },
    {
      name: "Miraj Cinemas",
      location: "R City Mall, Ghatkopar",
      rating: 4.3,
      description: "Modern screens and comfortable seating."
    },
    {
      name: "INOX",
      location: "Malad",
      rating: 4.4,
      description: "Great entertainment experience."
    },
    {
      name: "PVR",
      location: "Juhu",
      rating: 4.6,
      description: "Premium movie experience."
    },
    {
      name: "MovieMax",
      location: "Andheri",
      rating: 4.2,
      description: "Affordable movie entertainment."
    }
  ];

  return (
    <div className="container py-5">

      <h1 className="fw-bold">Theatres</h1>
      <p className="text-secondary mb-5">
        Find cinemas and movie theatres near you.
      </p>

      <div className="row">
        {theatres.map((theatre) => (
          <div className="col-md-6 col-lg-4 mb-4" key={theatre.name}>
            <TheatreCard theatre={theatre} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Theatres;