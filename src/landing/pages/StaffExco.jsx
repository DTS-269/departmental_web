import React, { useState } from "react";
import PageIntro from "../components/PageIntro";
import SectionHeading from "../components/SectionHeading";
import "../../App.css";
import { loadContent, saveContent } from "../../data/contentRepository.js";
import PersonCard from "../components/PersonCard.jsx";

const StaffExco = () => {
  const [content, setContent] = useState(loadContent);
  const staff = content.staff;
  const executives = content.executives;

  return (
    <main className="page-main">
      <PageIntro
        eyebrow="The people behind the possibilities"
        title={
          <>
            Good work starts
            <br />
            with <span>good people.</span>
          </>
        }
        description="Meet the staff who guide us, the student executives who bring us together, and the community we’re building."
      />
      <section className="content-section directory-section">
        <SectionHeading
          eyebrow="Here to help you grow"
          title="Our staff"
          description="Teachers, mentors, researchers, and the people who keep everything moving."
        />
        <div className="people-grid">
          {staff.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>
      <section className="content-section exec-section">
        <SectionHeading
          eyebrow="Student-powered"
          title="Your student executives"
          description="Your voice, your ideas, your people. Say hello to this year’s student leadership team."
        />
        <div className="people-grid exec-grid">
          {executives.map((person) => (
            <PersonCard key={person.name} person={person} executive />
          ))}
        </div>
      </section>
      <section className="people-note">
        <span>✳</span>
        <p>
          Looking for a supervisor, a collaborator, or just a friendly face?{" "}
          <a href="/more-info">We’d love to help you find the right person.</a>
        </p>
      </section>
    </main>
  );
};

export default StaffExco;
