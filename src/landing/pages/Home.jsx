import { useState } from "react";
import Arrow from "../components/Arrow";
import Eyebrow from "../components/Eyebrow";
import ProjectGrid from "../components/ProjectGrid";
import SectionHeading from "../components/SectionHeading";
import { loadContent, saveContent } from "../../data/contentRepository.js";
import "../../App.css";

const Home = () => {
  const [content, setContent] = useState(loadContent);

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>A place to make what matters</Eyebrow>
          <h1>
            Technology is better
            <br />
            when <span>we build it together.</span>
          </h1>
          <p className="hero-description">
            A home for curious minds, big questions, and ideas that make a
            difference. Come see what we’re working on.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="/project"
              //   onClick={(event) => onNavigate(event, "/project")}
            >
              Explore our projects <Arrow />
            </a>
            <a
              className="text-link"
              href="/staff-exco"
              //   onClick={(event) => onNavigate(event, "/staff-exco")}
            >
              Meet the people <Arrow />
            </a>
          </div>
          <div className="hero-note">
            <span className="avatar-stack">
              <i>J</i>
              <i>A</i>
              <i>M</i>
            </span>
            <span>
              Built by people who care
              <br />
              <strong>Students, staff & collaborators</strong>
            </span>
          </div>
        </div>
        <div
          className="hero-art"
          role="img"
          aria-label="Students collaborating around a computer"
        >
          <div className="art-note art-note-top">
            <span className="note-spark">✳</span>
            <span>
              Curiosity
              <br />
              looks good on you.
            </span>
          </div>
          <div className="art-caption">
            <span className="caption-line" /> Room to think. Space to make.
          </div>
          <div className="art-stamp">
            IDEAS
            <br />
            IN
            <br />
            MOTION
          </div>
        </div>
        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="hero-bottom-line" />
          <span>01 — 06</span>
        </div>
      </section>

      <section className="welcome-strip">
        <div className="welcome-label">
          <span className="welcome-icon">✳</span>
          <span>
            A NOTE FROM
            <br />
            OUR HOD
          </span>
        </div>
        <p>
          “The most exciting thing about technology isn’t the technology. It’s
          what people like you choose to do with it.”
        </p>
        <div className="hod-signature">
          <strong>Dr. Jordan Adeyemi</strong>
          <span>Head of Department</span>
        </div>
      </section>

      <section className="content-section news-section">
        <SectionHeading
          eyebrow="Fresh from the department"
          title="A little news, a lot to look forward to."
          action={
            <a
              className="text-link"
              href="/events"
              //   onClick={(event) => onNavigate(event, "/events")}
            >
              All announcements <Arrow />
            </a>
          }
        />
        <div className="news-grid">
          {content.news.slice(0, 3).map((item, index) => (
            <article
              className={`news-card news-card-${index + 1}`}
              key={item.id}
            >
              <div className="news-meta">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a
                className="card-link"
                href="/events"
                // onClick={(event) => onNavigate(event, "/events")}
                aria-label={`Read ${item.title}`}
              >
                Read the story <Arrow />
              </a>
            </article>
          ))}
          {content.news.length === 0 && (
            <p className="empty-state">
              There’s no news to share just yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      <section className="content-section business-ads-section">
        <SectionHeading
          eyebrow="Business spotlight"
          title="Make your business global with us."
          description="Share what you do with a growing community of curious minds, creators, and future leaders."
        />
        {content.ads.length > 0 ? (
          <div className="business-ad-grid">
            {content.ads.map((ad) => (
              <article className="business-ad-card" key={ad.id}>
                <div className="business-ad-image">
                  {ad.image ? (
                    <img src={ad.image} alt={`${ad.title} business`} />
                  ) : (
                    <span aria-hidden="true">✳</span>
                  )}
                  <span className="business-ad-badge">Featured business</span>
                </div>
                <div className="business-ad-content">
                  <span className="business-ad-category">{ad.category}</span>
                  <h3>{ad.title}</h3>
                  <p>{ad.description}</p>
                  <a
                    href={ad.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {ad.title} <Arrow diagonal />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="business-ad-empty">
            <p>
              Your business could be featured here. Connect with us to reach the
              next generation of innovators.
            </p>
            <a
              className="button button-primary"
              href="/more-info"
              //   onClick={(event) => onNavigate(event, "/more-info")}
            >
              Let’s work together <Arrow />
            </a>
          </div>
        )}
      </section>

      <section className="content-section projects-section">
        <SectionHeading
          eyebrow="Made around here"
          title="Small teams. Big what-ifs."
          description="A few things our community has been dreaming up, designing, and bringing to life."
          action={
            <a
              className="text-link"
              href="/project"
              //   onClick={(event) => onNavigate(event, "/project")}
            >
              See all projects <Arrow />
            </a>
          }
        />
        <ProjectGrid projects={content.projects.slice(0, 3)} />
      </section>

      <section className="home-cta">
        <span className="cta-star">✳</span>
        <div>
          <Eyebrow>Your next chapter</Eyebrow>
          <h2>There’s room for your idea here.</h2>
          <p>Meet the people, find an event, or just come say hello.</p>
        </div>
        <a
          className="button button-light"
          href="/more-info"
          //   onClick={(event) => onNavigate(event, "/more-info")}
        >
          Find your way in <Arrow />
        </a>
      </section>
    </main>
  );
};

export default Home;
