import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h3>IM Pharmacist</h3>
          <p>Your trusted partner in pharmaceutical services and healthcare solutions. We connect patients with reliable pharmacists and healthcare professionals.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/find-chemist">Find Chemist</a></li>
            <li><a href="/blogs">Health Blogs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section services">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/services/pharmacy-locator">Pharmacy Locator</a></li>
            <li><a href="/services/health-tips">Health Tips</a></li>
            <li><a href="/services/medicine-reminder">Medicine Reminder</a></li>
            <li><a href="/services/emergency-contacts">Emergency Contacts</a></li>
            <li><a href="/services/online-consultation">Online Consultation</a></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-phone"></i> +1 (555) 123-4567
          </p>
          <p>
            <i className="fas fa-envelope"></i> contact@impharmacist.com
          </p>
          <p>
            <i className="fas fa-location-dot"></i> 123 Healthcare Avenue,
            Medical District, NY 10001
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} IM Pharmacist. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;