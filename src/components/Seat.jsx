function Seat({ seat, selected, booked, onClick }) {
  return (
    <button
      disabled={booked}
      onClick={onClick}
      className={`seat ${
        booked
          ? "seat-booked"
          : selected
          ? "seat-selected"
          : "seat-available"
      }`}
    >
      {seat}
    </button>
  );
}

export default Seat;