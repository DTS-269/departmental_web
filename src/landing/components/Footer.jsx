import "../../style/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="/">
          <img className="brand-logo" src="/nadss-logo.png" alt="" />
          <span className="brand-copy">
            <strong>NADSS</strong>
            <small>
              Nigeria Association of Data Science Students @ OSUN STATE
              UNIVERSITY
            </small>
          </span>
        </a>
        <p>
          Curious minds. Practical ideas.
          <br />A better future, built together.
        </p>
        <div className="footer-links">
          <a href="/staff-exco">Staff & Exco</a>
          <a href="/project">Projects</a>
          <a href="/events">Events</a>
          <a href="/more-info">Get in touch</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © 2026 Nigeria Association of Data Science Students @ OSUN STATE
          UNIVERSITY
        </span>
        <span>Made for the next big idea.</span>
      </div>
    </footer>
  );
};

export default Footer;
