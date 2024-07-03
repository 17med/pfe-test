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
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://twitter.com/example">Twitter</a>
              </li>
              <li>
                <a href="https://facebook.com/example">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com/example">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h5>Contact Us</h5>
            <address>
              1234 Street Name
              <br />
              City, State 12345
              <br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-muted small mb-0">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
