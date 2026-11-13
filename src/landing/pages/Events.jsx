import React, { useState } from "react";
import Arrow from "../components/Arrow";
import SectionHeading from "../components/SectionHeading";
import PageIntro from "../components/PageIntro";
import { loadContent, saveContent } from "../../data/contentRepository.js";
import "../../App.css";

const Events = () => {
  const [content, setContent] = useState(loadContent);
  const events = content.events;

  return (
    <main className="page-main">
      <PageIntro
        eyebrow="Put it in your calendar"
        title={
          <>
            Good things happen
            <br />
            <span>when we show up.</span>
          </>
        }
        description="Workshops, conversations, deadlines, and the occasional excuse to eat together. Here’s what’s coming up."
      />
      <section className="content-section directory-section">
        <SectionHeading
          eyebrow="The department noticeboard"
          title="Coming up"
          description="Make a little room in your week. There’s something for everyone."
        />
        <div className="event-list">
          {events.map((event) => (
            <article className="event-card" key={event.id}>
              <div
                className={`event-image-slot${event.image ? "" : " event-image-empty"}`}
              >
                {event.image ? (
                  <img
                    className="event-image"
                    src={event.image}
                    alt={`Picture for ${event.title}`}
                  />
                ) : (
                  <span>Event image</span>
                )}
              </div>
              <div className="event-date">
                <strong>{event.day}</strong>
                <span>{event.month}</span>
              </div>
              <div className="event-details">
                <span className="event-category">{event.category}</span>
                <h3>{event.title}</h3>
                <p>
                  {event.time}
                  <span>·</span>
                  {event.location}
                </p>
                {event.flyer && (
                  <a
                    className="event-flyer"
                    href={event.flyer}
                    download={event.flyerName || `${event.title}-flyer`}
                  >
                    View event flyer <Arrow diagonal />
                  </a>
                )}
              </div>
              <a
                className="event-arrow"
                href="/more-info"
                aria-label={`Ask about ${event.title}`}
              >
                <Arrow diagonal />
              </a>
            </article>
          ))}
          {events.length === 0 && (
            <div className="empty-state">
              <p>No events have been announced yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>
      <section className="notice-panel">
        <span className="notice-icon">✳</span>
        <div>
          <h2>Have an announcement to share?</h2>
          <p>
            Department members can send event and news submissions to the
            department office.
          </p>
        </div>
        <a className="text-link" href="/more-info">
          Get in touch <Arrow />
        </a>
      </section>
    </main>
  );
};

export default Events;
