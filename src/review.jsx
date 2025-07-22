import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



function Review({imageurl,imageBackground,altText,name,country,rating,paragragh}) {
  return (
    <div className="review">
      <div className="each-review">
        <img src={imageBackground} alt={altText}/>
        <div className="star-and-name">
          <img src={imageurl} alt={altText} id='image'/>
          <b>{name}
          </b>
          
          
          <div className="rating"> <FontAwesomeIcon icon={faStar} />{rating}
          </div>
          
        
        </div>
        
        <p>
          
         {paragragh} 
        </p>
      </div>
    </div>
  );
}

export default Review;
