import "../../App.css";

const Arrow = ({ diagonal = false }) => {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
};

export default Arrow;
