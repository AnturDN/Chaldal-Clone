import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-cities">
          <strong>Cities:</strong> <a href="#">Dhaka</a> | <a href="#">Chattogram</a> | <a href="#">Jashore</a>
        </div>
        <div className="footer-sections">
          <div className="footer-col">
            <h4>About Chaldal</h4>
            <a href="#">Our Story</a>
            <a href="#">Team</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <h4>Payment Methods</h4>
            <div className="payments">
              <img src="/mastercard.png" alt="MasterCard" />
              <img src="/visa.png" alt="Visa" />
              <img src="/bkash.png" alt="bKash" />
            </div>
          </div>

          <div className="footer-col">
            <h4>Customer Service</h4>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
          </div>

          <div className="footer-col">
            <h4>For Business</h4>
            <a href="#">Corporate</a>
          </div>

          <div className="footer-col right-col">
            <div className="get-app">
              <input type="text" placeholder="+88" />
              <button>Get app</button>
            </div>
            <div className="app-links">
              <img src="/google.png" alt="Google Play" />
              <img src="/app_store.png" alt="App Store" />
            </div>
            <p className="support"><i class="fa-solid fa-phone"></i> 16710 <br /> or <a href="mailto:support@chaldal.com">support@chaldal.com</a></p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2013 Chaldal Limited</span>
        <div className="social-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <button className="lang-btn"><i class="fa-solid fa-globe"></i> English (EN)</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
