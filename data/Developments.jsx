import React from "react";
import { properties } from "./propertyData"; // Adjust path if needed
import { Link } from "react-router-dom";

function TestGallery({onBuy}) {
  return (
    <>
    <div><h1> Developments For Sale In Ghana</h1>
Ghana keeps on growing in economics and supply of real estate assets. This is making Ghana one of Africa's most interesting markets for investors.

The following are some of the Estate Developers in Accra and on Dan's Estate.com, some of whom are the top real estate companies in Ghana.</div>
    <div>
      
      <div className="mansion">
        {properties.map((p) => (
          <div className="each-mansion" key={p.id}>
            <img src={p.estate} alt={p.location} />
            <div className="property-details">
            <p><strong>Location:</strong> {p.location}</p>
            <p><strong>Price:</strong> {p.price}</p>
            <p><strong>Area:</strong> {p.area}</p>
            <p><strong>Rooms:</strong> {p.rooms}</p>
            
            </div>
            <Link to="/Purchase"> 
            <button >purchase</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default TestGallery;
