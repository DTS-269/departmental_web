import "../../App.css";
import SectionHeading from "../components/SectionHeading";
import ProjectGrid from "../components/ProjectGrid";
import Eyebrow from "../components/Eyebrow";
import Arrow from "../components/Arrow";
import PageIntro from "../components/PageIntro";
import { loadContent, saveContent } from "../../data/contentRepository.js";
import { useState } from "react";

const Projects = () => {
  const [content, setContent] = useState(loadContent);
  const projects = content.projects;

  return (
    <main className="page-main">
      <PageIntro
        eyebrow="A work in progress (in the best way)"
        title={
          <>
            From “what if?”
            <br />
            to <span>“we did that.”</span>
          </>
        }
        description="Meet the student teams turning thoughtful questions into useful, surprising, and sometimes world-changing projects."
      />
      <section className="content-section directory-section">
        <SectionHeading
          eyebrow={`${projects.length} ideas and counting`}
          title="The project shelf"
          description="Each project starts with a question. Every one of them is better with a team."
        />
        <ProjectGrid projects={projects} />
      </section>
      <section className="home-cta project-cta">
        <span className="cta-star">✳</span>
        <div>
          <Eyebrow>Have a what-if?</Eyebrow>
          <h2>Bring the half-formed idea.</h2>
          <p>We’ll help you find the people and tools to make it real.</p>
        </div>
        <a className="button button-light" href="/more-info">
          Start a conversation <Arrow />
        </a>
      </section>
    </main>
  );
};

export default Projects;
