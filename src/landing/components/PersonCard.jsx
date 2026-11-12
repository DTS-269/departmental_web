import "../../App.css";

const PersonCard = ({ person, executive = false }) => {
  return (
    <article className="person-card">
      <div className={`person-photo ${person.color}`}>
        {person.image ? (
          <img
            className="person-image"
            src={person.image}
            alt={`Portrait of ${person.name}`}
          />
        ) : (
          <span>{person.initials}</span>
        )}
        <span className="person-photo-symbol" aria-hidden="true">
          ✳
        </span>
      </div>
      <div className="person-details">
        <h3>{person.name}</h3>
        <p>{person.role}</p>
        {!executive && <span className="person-focus">{person.focus}</span>}
      </div>
      <span className="person-arrow" aria-hidden="true">
        ↗
      </span>
    </article>
  );
};

export default PersonCard;
