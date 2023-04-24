import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";

import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";

import { cards } from "../../data";
import img1 from "../../img/construction.svg";
import img2 from "../../img/handicraft.svg";
import img3 from "../../img/menu.svg";
import img4 from "../../img/voice.svg";
import img5 from "../../img/plumber.svg";
import img6 from "../../img/taxi.svg";
import img7 from "../../img/group.svg";
import img8 from "../../img/artist.svg";
import img9 from "../../img/cleaning.svg";
import img10 from "../../img/photography.svg";

function Home() {
  return (
    <div className="home">
      <Featured />
    
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="quote" id="card"><h1>" No job is too small, no talent is too big "- on our micro job marketplace.</h1></div>
      <div className="features">
        
        <div className="container">
          
          <div className="item">
            <h1>Some listed Features of our projects</h1>
            <hr></hr>
            <div className="title">
              <img src="./img/check.png" alt="" />
              User registration: 

            </div>
            <p>
            Users can create an account on the website to offer or request services.

            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Service listings:
            </div>
            <p>
            Users can list their services on the website, including a description, pricing, and availability.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Search and filtering: 
            </div>
            <p>
            Users can search for services based on keywords, location, category, price range, and other criteria.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
            
Reviews and ratings: 
            </div>
            <p>
            Users can leave feedback and ratings on the quality of service they received, helping other users make informed decisions.
            </p>
          </div>
          <div className="item">
          <div className="title">
              <img src="./img/check.png" alt="" />
              Payment and transactions: 
            </div>
            <p>
            The website can provide a payment gateway to facilitate transactions between users, with the website taking a commission on each sale.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Messaging system: 
            </div>
            <p>
            Users can communicate with each other through a messaging system built into the website.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Profile pages:
            </div>
            <p>
            Each user can have a profile page with information about their services, ratings, and reviews.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Security features: 
            </div>
            <p>
            The website should have security measures in place to protect users' personal information and financial transactions.

            </p>
           
            {/* <video src="./img/video.mp4" controls /> */}
          </div>
        </div>
      </div>
      <div className="explore "id="explores">
        <div className="container" >
          <h1>Services Available on our MarketPlace</h1>
          <div className="items">
            <div className="item">
            <img src={img1} alt="" />
              <div className="line"></div>
              <span>Construction</span>
            </div>
            <div className="item">
              <img
                src={img2}
                alt=""
              />
              <div className="line"></div>

              <span>Handicraft</span>
            </div>
            <div className="item">
              <img
                src={img3}
                alt=""
              />
              <div className="line"></div>
              <span>Catering services</span>
            </div>
            <div className="item">
              <img
                src={img4}
                alt=""
              />
              <div className="line"></div>
              <span>Voice Artists</span>
            </div>
            <div className="item">
              <img
                src={img5}
                alt=""
              />
              <div className="line"></div>
              <span>Plumber</span>
            </div>
            <div className="item">
              <img
                src={img6}
                alt=""
              />
              <div className="line"></div>
              <span>Pickup & Drop</span>
            </div>
            <div className="item">
              <img
                src={img7}
                alt=""
              />
              <div className="line"></div>
              <span>Crowd Gathering</span>
            </div>
            <div className="item">
              <img
                src={img8}
              />
              <div className="line"></div>
              <span>Artist</span>
            </div>
            <div className="item">
              <img
                src={img9}
                alt=""
              />
              <div className="line"></div>
              <span>Cleaning Service</span>
            </div>
            <div className="item">
              <img
                src={img10}
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              MJ <i>MarketPlace</i>
            </h1>
            <h1>
              An Outsourcing Project Market place , designed for <i>People</i>
            </h1>
            <p>
              Sign up on our website and get a chance to get opportunities in different fields for Work ,and Services Offered by other sellers.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to MJ marketplace
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent as per your need by chating with him/her.
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage your task and boost productivity with one powerful Marketplace for management of works.
            </div>
            <button>Explore </button>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Home;
