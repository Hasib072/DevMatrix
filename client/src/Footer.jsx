import React from 'react';
import './Footer.css';
// Import images if necessary
import logo from './assets/component/logo.png';
import icons from './assets/component/icons2.png';
import lastImage from './assets/component/last.png';

function Footer() {
  return (
    <div className="lastdiv">
      <div className="footer">
        <div>
          <img src={logo} className="logo" alt="Logo" />
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ullam facere adipisci aperiam esse.</h3>
          <img src={icons} className="icons" alt="Icons" />
        </div>

        <div className="line"></div>

        <div className="three">
          <div>
            <ul style={{ listStyleType: 'none', color: 'black' }}>
              <h1 style={{ fontSize: 'small' }}><strong>Documentation</strong></h1>
              <li>Getting Started</li>
              <li>API reference</li>
              <li>Integration</li>
              <li>Examples</li>
              <li>SDKs</li>
            </ul>
          </div>
                                            
          <div>
            <ul style={{ listStyleType: 'none', color: 'black' }}>
              <h1 style={{ fontSize: 'small' }}><strong>Company</strong></h1>
              <li>Blog</li>
              <li>Contact</li>
              <li>Customers</li>
              <li>Brand</li>
            </ul>
          </div>
                                            
          <div>
            <ul style={{ listStyleType: 'none', color: 'black' }}>
              <h1 style={{ fontSize: 'small' }}><strong>Legal</strong></h1>
              <li>Acceptable Use</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>                                                
      </div>
                                            
      <img src={lastImage} className="last" alt="Decorative" />
    </div>
  );
}

export default Footer;
