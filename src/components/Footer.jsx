import React from 'react';
import './Footer.css'; // Import CSS file

function Footer() {
  return (
    <footer className="footer bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Your website description goes here. Provide some information about your company or organization.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Home</a>
              </li>
              <li>
                <a href="#!" className="text-dark">About</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Services</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Connect With Us</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  <i className="bi bi-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-dark" href="https://yourwebsite.com/"> YourWebsite.com</a>
      </div>
    </footer>
  );
}

export default Footer;