import Eyebrow from "./Eyebrow";
import "../../App.css";

const SectionHeading = ({ eyebrow, title, description, action }) => {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {action}
    </div>
  );
};

export default SectionHeading;
