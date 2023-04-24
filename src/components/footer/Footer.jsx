import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Construction Workers</span>
            <span>Audience Gathering</span>
            <span>Package & Movers</span>
            <span>Catering Services</span>
            <span>Cleaning services</span>
            <span>Drawing Artists</span>
        
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Pickup & Drop</span>
            <span>Voice Artists</span>
            <span>Photography</span>
            <span>Handicrafts</span>
            <span>Beautician</span>
            <span>Plumbing</span>
          </div>
          <div className="item">
            <h2>About our Team</h2>
            <span><h3>17</h3>Harshpratap Singh</span>
            <span><h3>21</h3>Lokesh Sharma</span>
            <span><h3>29</h3>Pranay Gore</span>
            <span><h3>48</h3>Shivam Pandey</span>
            
          </div>
          <div className="item">
            <h2>Project Guide</h2>
            <span>Prof. Sunil Katkar</span>
            
          </div>
        
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>MJ- </h2> Marketplace
            <span> @ Vidyavardhini's college of engineering and Technology</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
