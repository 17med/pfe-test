// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer  py-3 bg-dark text-white"
      style={{ marginTop: "100px" }}
    >
      <div className="container text-center">
        <span className="text-muted">Place sticky footer content here.</span>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <h5>Links</h5>
          </div>
          <div className="col-sm-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled"></ul>
          </div>
          <div className="col-sm-4">
            <h5>Contact Us</h5>
            <address>
              tunis beb jdid
              <br />
              tunis rades
              <br />
              <abbr title="Phone">P:</abbr> 123156465
            </address>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-muted small mb-0">© 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
