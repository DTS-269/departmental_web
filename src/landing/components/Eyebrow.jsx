import "../../App.css";

const Eyebrow = ({ children }) => {
  return (
    <p className="eyebrow">
      <span className="eyebrow-dot" />
      {children}
    </p>
  );
};

export default Eyebrow;
