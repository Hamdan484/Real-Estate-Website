import React from 'react'

function Mansion({name,area,logo,image}) {
  return (
    
      <div>
       <img src={image} alt="mansion"/>
        <span><h2>{name}</h2></span>
        <span>{area}</span>
    </div>
  )
}

export default Mansion
