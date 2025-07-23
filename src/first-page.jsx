import React, { useState } from "react";
import estate1 from "./assets/real-estate c9.jpg";
import estate2 from "./assets/real-estate c10.jpg";
import R1 from "./assets/real-estate r1.jpg";
import R2 from "./assets/real-estate r2.jpg";
import R3 from "./assets/real-estate r3.jpg";
import bubu from "./assets/bubu 1.jpg";
import zack from "./assets/real-estate zack.jpg";
import Marshal from "./assets/real-estate Marshal.jpg";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUser,
  faComment,
  faFileLines,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Review from "./review";
import Apartments2 from "./Appartments2";
import Firstpage from "./itemDescription";
import { properties } from "../data/propertyData";

function Page({onBuy}) {
  const [filteredHomes, setfilteredHomes] = useState(properties); // Show all by default
  const [sale, setSale] = useState("Default");
  const [type, setType] = useState("Default");
  const [location, setLocation] = useState("Default");
  const [price, setPrice] = useState("Default");
  const [rooms, setRooms] = useState("Default");

  const handleSearch = () => {
    const results = properties.filter((p) => {
      const matchLocation =
        location === "Default" ||
        p.location.toLowerCase().includes(location.toLowerCase());

      const matchRooms = rooms === "Default" || p.rooms <= parseInt(rooms);

      const matchPrice = price === "Default" || p.price <= parseInt(price);

      const matchSale =
        sale === "Default" || p.sale.toLowerCase().includes(sale.toLowerCase());

      const matchType =
        type === "Default" || p.type.toLowerCase().includes(type.toLowerCase());

      return (
        matchLocation && matchRooms && matchPrice && matchSale && matchType
      );
    });

    setfilteredHomes(results);
  };

  return (
    <>
      <div className="whole-inThisPage">
        <div className="body1">
          <div className="texts-and-button">
            <h1>Find Your Dream Home</h1>
            <p>
              Explore our curated selection of exquisite <br />
              properties meticulously tailored to your <br />
              unique dream vision
            </p>
            <Link to="/Purchase">
            <button onClick={onBuy}>Buy Home</button>
            </Link>
          </div>
          <img src={estate1} alt="" id="estate1" />
        </div>

        <div className="locations">
          <div className="locationClass">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="Default">Select Location</option>
              <option value="Accra">Accra</option>
              <option value="Kumasi">Kumasi</option>
              <option value="Tamale">Tamale</option>
              <option value="Tema">Tema</option>
              <option value="Cape Coast">Cape Coast</option>
              <option value="Damongo">Damongo</option>
            </select>

            <select value={sale} onChange={(e) => setSale(e.target.value)}>
              <option value="Default">Select Sale Type</option>
              <option value="Sale">Sale</option>
              <option value="Rent">Rent</option>
            </select>

            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="Default">Select Property Type</option>
              <option value="Appartment">Appartment</option>
              <option value="Guest House">Guest House</option>
              <option value="Office">Office</option>
              <option value="Land">Land</option>
            </select>

            <select value={price} onChange={(e) => setPrice(e.target.value)}>
              <option value="Default">Select Max Price</option>
              <option value="200000">Up to $200,000</option>
              <option value="400000">Up to $400,000</option>
              <option value="600000">Up to $600,000</option>
              <option value="800000">Up to $800,000</option>
              <option value="1000000">Up to $1,000,000</option>
            </select>

            <select value={rooms} onChange={(e) => setRooms(e.target.value)}>
              <option value="Default">Select Number of Beds</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>

            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        <h1>Our Popular Residences</h1>
        <div className="residences">
          {filteredHomes.length > 0 ? (
            filteredHomes.map((output, index) => (
              <div className="info" key={index}>
                <Apartments2
                  estate={output.estate}
                  location={output.location}
                  rooms={output.rooms}
                  area={output.area}
                  price={`$ ${output.price}`}
                  sale={output.sale}
                  type={output.type}
                  onBuy={onBuy}
                />
              </div>
            ))
          ) : (
            <p>No matching properties found.</p>
          )}
        </div>
        <div className="body1">
          <img src={estate2} alt="" className="estate2" />
          <div className="texts-and-button">
            <h1>We Help You To Find Your Dream Home</h1>
            <p>
              From copy cottages to luxurious estates, <br />
              Our dedicated team guides you through every step in the <br />
              journey, ensuring your dream home becomes a reality
            </p>
            <div className="spans">
              <span>
                <h1>8k+ </h1>Houses available
              </span>
              <span>
                <h1>2k+ </h1>Trusted Agents
              </span>
              <span>
                <h1>6k+ </h1>Houses Sold
              </span>
            </div>
          </div>
        </div>

        <div className="customers-review">
          <h1>Why Choose Us</h1>
          <p>
            Elevating Your Home Buying Experience with Expertise, <br />
            integrity and Unmatched Personalized Service
          </p>
          <div className="review-boxes-whole">
            <div className="each-box">
              <FontAwesomeIcon icon={faLocationDot} />
              <Firstpage
                paragraph="Benefit from our team's seasoned expertise for a smooth buying"
                title="Expert Guidance"
              />
            </div>
            <div className="each-box">
              <FontAwesomeIcon icon={faUser} />
              <Firstpage
                paragraph="Our Services adapt to your unique needs, making your journey stress-free"
                title="Personalized Services"
              />
            </div>
            <div className="each-box">
              <FontAwesomeIcon icon={faFileLines} />
              <Firstpage
                paragraph="Stay informed with our clear and honest approach to buying your home"
                title="Transparent Process"
              />
            </div>
            <div className="each-box">
              <FontAwesomeIcon icon={faHandshake} />
              <Firstpage
                paragraph="Providing peace of mind with our responsive and attentive customer support"
                title="Emotional Support"
              />
            </div>
          </div>
        </div>

        <h1>What people say about Dan's Estate</h1>
        <div className="review-components">
          <Review
            name="Iddi Marshal"
            rating={3.5}
            paragragh="Dan's Estate cares about their clients. They listened to my needs and preferences and helped me find the perfect house in my area. Their professionalism and attention to detail is unmatched."
            imageBackground={R1}
            imageurl={Marshal}
          />
          <Review
            name="Husseini Bubu"
            rating={4.5}
            paragragh="Dan's Estate made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step in the process. Couldn't be happier."
            imageBackground={R2}
            imageurl={bubu}
          />
          <Review
            name="Issah Zackaria"
            rating={4.5}
            paragragh="I had a fantastic experience working with Dan's Estate. Their expertise and personalized services exceeded my expectations. I found my dream home quickly and smoothly. I recommend!"
            imageBackground={R3}
            imageurl={zack}
          />
        </div>

        <h1>
          Do You Have Any Questions? <br />
          Get Help from us
        </h1>
        <div className="interaction-section">
          <span>
            <FontAwesomeIcon icon={faComment} /> Chat live with our support team
          </span>
          <span>Browse our FAQ</span>
          <span>
            <input type="text" placeholder="Enter your email address" />
          </span>
          <span>
            <button>Submit</button>
          </span>
        </div>

        <div className="about">
          <div className="box">
            <h1> Dan's Estate </h1>
            bringing you closer to your dream home. You are just a click away
          </div>
          <div className="box">
            <h1> About </h1>
            Our Story <br />
            Careers <br />
            Our Team <br />
            Our resources <br />
            our Mission
          </div>
          <div className="box">
            <h1> Support </h1>
            FAQ <br />
            Contact us <br />
            Help Center <br />
            Terms of Service
          </div>
          <div className="box">
            <h1> Find Us</h1>
            Events <br />
            Locations <br />
            News letter
          </div>
          <div className="box">
            <h1> Our socials </h1>
            <a href="https://www.facebook.com/?ref=homescreenpwa">
              {" "}
              <FontAwesomeIcon icon={faFacebook} /> Facebook <br />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
              Instagram <br />
            </a>

            <a href="https://x.com/">
              <FontAwesomeIcon icon={faXTwitter} /> Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
