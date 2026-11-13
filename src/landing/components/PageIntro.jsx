import "../../App.css";
import Eyebrow from "./Eyebrow";

const PageIntro = ({ eyebrow, title, description }) => {
  return (
    <header className="page-intro">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <span className="page-intro-star" aria-hidden="true">
        ✳
      </span>
    </header>
  );
};

export default PageIntro;
