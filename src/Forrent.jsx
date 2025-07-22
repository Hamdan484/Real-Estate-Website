import React, { useState } from "react";
import estate5 from "./assets/real-estate c13.jpg";
import { estates } from "../data/estates";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShower,
  faBed,
  faPhone,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Apartments from "./apartments";

function Forrent({onBuy}) {
  const [filteredHomes, setFilteredHomes] = useState(estates);
  const [location, setLocation] = useState("Default");
  const [type, setType] = useState("Default");
  const [rooms, setRooms] = useState("Default");
  const [baths, setBaths] = useState("Default");
  const [forSale, setForSale] = useState("Default");
  const [price, setPrice] = useState("Default");

  const handleSearch = (e) => {
    e.preventDefault();
    const result = estates.filter((p) => {
      const matchType = type === "Default" || p.type === type;
      const matchLocation =
        location === "Default" ||
        p.location.toLowerCase().includes(location.toLowerCase());
      const matchForSale =
        forSale === "Default" || p.forSale === forSale;
      const matchBaths = baths === "Default" || p.baths <= parseInt(baths);
      const matchPrice = price === "Default" || p.price <= parseInt(price);
      const matchRooms = rooms === "Default" || p.rooms <= parseInt(rooms);

      return (
        matchType &&
        matchLocation &&
        matchForSale &&
        matchBaths &&
        matchRooms &&
        matchPrice
      );
    });
    setFilteredHomes(result);
  };

  return (
    <div className="forRent">
      <div className="upper-image-and-writings">
        <div className="span">
          <h1>THE BLOSSOMS</h1>
          <div className="line-content">
            <div className="line"></div>
            <span>TSE ADDO</span>
            <div className="line"></div>
          </div>
          <button>STUDIOUS BEDROOMS TRIPLEXES</button> <br />
          0597788861 | 0509686122 | www.hamdanibrahim3@gmail.com
        </div>
        <img src={estate5} alt="" id="estate5" />
      </div>

      <div className="form1">
        <form onSubmit={handleSearch}>
          <div className="radio-inputs">
            <select onChange={(e) => setForSale(e.target.value)}>
              <option value="Default">Purpose</option>
              <option value="forSale">For Sale</option>
              <option value="forRent">For Rent</option>
            </select>
            <select onChange={(e) => setType(e.target.value)}>
              <option value="Default">Type</option>
              <option value="Land">Land</option>
              <option value="Apartment">Apartment</option>
              <option value="Office">Office</option>
              <option value="Commercial space">Commercial space</option>
            </select>
            <select onChange={(e) => setLocation(e.target.value)}>
              <option value="Default">Location</option>
              <option value="Tema">Tema</option>
              <option value="Accra">Accra</option>
              <option value="Kumasi">Kumasi</option>
              <option value="Tamale">Tamale</option>
            </select>
            <select onChange={(e) => setRooms(e.target.value)}>
              <option value="Default">Rooms</option>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <select onChange={(e) => setBaths(e.target.value)}>
              <option value="Default">Baths</option>
              {[1, 2, 3].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <select onChange={(e) => setPrice(e.target.value)}>
              <option value="Default">Max Price</option>
              <option value="70000">70,000</option>
              <option value="200000">200,000</option>
              <option value="400000">400,000</option>
              <option value="1000000">1,000,000</option>
            </select>
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </form>
      </div>

      <div className="properties-layout">
        {filteredHomes.length > 0 ? (
          filteredHomes.map((output, index) => (
            <div key={index}>
              <Apartments
                location={output.location}
                price={`$ ${output.price}`}
                rooms={output.rooms}
                type={output.type}
                image={output.estate}
                onBuy={onBuy}
              />
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default Forrent;
