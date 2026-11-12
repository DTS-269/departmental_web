import "../../App.css";
import Arrow from "./Arrow";

const ProjectGrid = ({ projects }) => {
  if (!projects.length) {
    return (
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className={`project-visual ${project.color || "lavender"}`}>
              {project.image && (
                <img
                  className="project-image"
                  src={project.image}
                  alt={`Picture for ${project.title}`}
                />
              )}
              {!project.image && (
                <span className="project-initials">
                  {project.initials || "P"}
                </span>
              )}
              <span className="project-visual-mark">✳</span>
              <span className="project-open">
                <Arrow diagonal />
              </span>
            </div>
            <div className="project-card-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-team">
                {project.team || "Student project"}
              </span>
            </div>
          </article>
        ))}
      </div>
    );
  }
  return <div>ProjectGrid</div>;
};

export default ProjectGrid;
