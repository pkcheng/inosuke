import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-dark mt-5">
        <div className="container">
          <div className="col item social">
            <a
              href="https://www.linkedin.com/in/pkcheng/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/pkcheng"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <h3 className="copyright">Created and Designed by PKC</h3>
        <p className="copyright">PKC © 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
