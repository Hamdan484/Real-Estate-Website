import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {faApple} from '@fortawesome/free-brands-svg-icons';
import newyork from './assets/real-estate-newyork.jpg';


function SignUp() { 
  
  const [name, setName]=useState('')
  const [Password, setPassword]=useState('')
  const [email, setEmail]=useState('')
  const [create,setCreate]=useState(false);
  const navigate=useNavigate()
  const blogs={name,Password,email}
  const handleSubmit=(e)=>{
    e.preventDefault();
    setCreate(true);
    fetch('http://localhost:3001/blogs',{
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(blogs)
      })
      .then(()=>{
        console.log("new blog added");  
        navigate('/')    
    })
  }
  
 
  return (
    <div className='signUp'>
      <form onSubmit={handleSubmit}>
        <h1>Sign-up</h1>
        Enter your details below to create account and get started <br />
        <div className="details">
          <div className="credemtials">
            <label htmlFor="name">Full name</label> <br />
          
            <input type="text"placeholder='Enter your full name'  value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="credentials">
            <label htmlFor="email">Email</label> <br />
            <input type="text"placeholder='Enter your email address' required value={email}
            onChange={(e)=>setEmail(e.target.value)}  />
          </div>
          <div className="credemtials">
            <label htmlFor="Password">Password</label> <br />
            <input type="text"placeholder='Enter your Password' value={Password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          
          <button type='submit'>Create account</button>
        </div>
        <div className="already-have-an-account">Already have an account? <a href="#">Login</a></div>
        <div className='or'><div className="hr"></div> or <div className="hr"></div></div>
        <div className="sign-up-with-google-and-apple">
          <button> 
            <FontAwesomeIcon icon={faGoogle} />
            Sign-up with Google</button><br />
          <button> <FontAwesomeIcon icon={faApple}/> Sign-Up with Apple</button>
         
          
        </div>
      </form>
      <div className="signUp-image">
        <img src={newyork} alt="" />
        <div className="overlay-text">
          Buy Appartments from us anytime
        </div>
      </div>
    
    </div>
  )
}

export default SignUp
