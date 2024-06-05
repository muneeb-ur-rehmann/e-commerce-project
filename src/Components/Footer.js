import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Email: contact@yourstore.com</p>
        <p>Phone: +123-456-7890</p>
        <p>Address: 123 E-commerce St, Online City</p>
      </div>
      <div className="footer-column">
        <Link style={{textDecoration:"none", color:"#fff",fontWeight:"bold"}} to={'/about'}>About Us</Link>
        <p>Our Story</p>
        <p>Careers</p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer-column">
        <h3>Description</h3>
        <p>
          Welcome to Your Store, your number one source for all things [product, ie: Clothes, bags, electronics]. We're dedicated to giving you the very best of [product], with a focus on quality, customer service, and uniqueness.
        </p>
      </div>
    </footer>
  );
};

export default Footer;