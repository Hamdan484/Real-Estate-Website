import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faBed} from '@fortawesome/free-solid-svg-icons';
import { faTape } from '@fortawesome/free-solid-svg-icons';
import {  properties } from '../data/propertyData';
import { Link } from 'react-router-dom';

function Apartments2({estate,location,rooms,type,price,forSale,onBuy}) {
  return (
    <div>
      <div className="each-residence">
                  <img src={estate} alt="" />
                  
                  
                  <h3><FontAwesomeIcon icon={faLocationDot} />{location}</h3>
                  <div className="info">
                  <div className="rooms-and-size">
                    <div className="rooms2">
                    <span id='rooms1'><FontAwesomeIcon icon={faBed} />
                     &nbsp; {rooms}
                  
                    </span>
                    </div>
                    <div className="rooms2">
                    <span id='rooms1'> <FontAwesomeIcon icon={faTape} />
                      &nbsp;{type}&nbsp;
                      {forSale}
                      
                    </span>
                    </div>
                    </div>
                    
                   
                    </div>
                    <div className='button-and-price'>
                  <Link to="/Purchase"> <button onClick={onBuy}>Buy</button></Link>
                   <b>{price}</b>
                     </div>
      
      
                </div>
    </div>
  )
}

export default Apartments2
