import React from 'react';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function AgentsProps({agentName,location,numberOfListings,introduction,logo}) {
  return (
    <div className="single-agent">
<div><img src={logo}/></div>
<div className='pic'>
<h3>{agentName}</h3>
<h4><FontAwesomeIcon icon={faLocationDot} />{location} <br />{agentName}<br />
{numberOfListings}listings</h4>
{introduction}
<Link to="/Purchase">
<button><FontAwesomeIcon icon={faPhone}/>view Number</button></Link>
</div>
</div>
  )
}

export default AgentsProps






