import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faBed} from '@fortawesome/free-solid-svg-icons';
import { faTape } from '@fortawesome/free-solid-svg-icons';
import { estates } from '../data/estates';
import { Link } from 'react-router-dom';

function Apartments({image,onBuy,location,rooms,type,price,forSale}) {
  return (
    <div>
      <div className="each-residence">
                  <img src={image} alt="" />
                  
                  
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
                      {type}
                      {forSale}
                      
                    </span>
                    </div>
                    </div>
                    
                   
                    </div>
                    <div className='button-and-price'>
                      <Link to="/Purchase">
                   <button onClick={onBuy}>Buy</button></Link><b>{price}</b>
                     </div>
      
      
                </div>
    </div>
  )
}

export default Apartments
