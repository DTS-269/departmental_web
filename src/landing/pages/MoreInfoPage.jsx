import React from "react";
import Eyebrow from "../components/Eyebrow";
import Arrow from "../components/Arrow";
import SectionHeading from "../components/SectionHeading";
import PageIntro from "../components/PageIntro";
import "../../App.css";

const MoreInfoPage = () => {
  return (
    <main className="page-main">
      <PageIntro
        eyebrow="The practical bits"
        title={
          <>
            Everything you need
            <br />
            to <span>feel at home.</span>
          </>
        }
        description="Your go-to place for finding the department, getting support, and taking that next step."
      />
      <section className="content-section directory-section info-section">
        <SectionHeading
          eyebrow="Find your way around"
          title="A few useful things"
          description="Start here for the details that make your department experience a little easier."
        />
        <div className="info-grid">
          <article className="info-card">
            <span className="info-icon">⌖</span>
            <span className="info-index">01 / FIND US</span>
            <h3>Come on in.</h3>
            <p>
              Department of Technology
              <br />
              Faculty Building, Block B<br />
              Main Campus
            </p>
            <a href="mailto:nadss3080@gmail.com">
              Get directions <Arrow diagonal />
            </a>
          </article>
          <article className="info-card">
            <span className="info-icon">✉</span>
            <span className="info-index">02 / SAY HELLO</span>
            <h3>Talk to a human.</h3>
            <p>
              Questions about a course, a project, or where to start? We’re
              happy to point you in the right direction.
            </p>
            <a href="mailto:nadss3080@gmail.com">
              nadss3080@gmail.com <Arrow diagonal />
            </a>
          </article>
          <article className="info-card">
            <span className="info-icon">↗</span>
            <span className="info-index">03 / STUDENT SUPPORT</span>
            <h3>You don’t have to figure it out alone.</h3>
            <p>
              For academic guidance, wellbeing support, and help finding the
              right person to talk to.
            </p>
            <a href="/staff-exco">
              Meet the team <Arrow diagonal />
            </a>
          </article>
          <article className="info-card">
            <span className="info-icon">▤</span>
            <span className="info-index">04 / RESOURCES</span>
            <h3>Good to know.</h3>
            <p>
              Explore the department, discover student projects, and find your
              next opportunity to get involved.
            </p>
            <a href="/project">
              Browse projects <Arrow diagonal />
            </a>
          </article>
        </div>
      </section>
      <section className="contact-band">
        <div>
          <Eyebrow>Can’t find what you need?</Eyebrow>
          <h2>That’s what we’re here for.</h2>
        </div>
        <a className="button button-primary" href="mailto:nadss3080@gmail.com">
          Email the department <Arrow diagonal />
        </a>
      </section>
    </main>
  );
};

export default MoreInfoPage;
