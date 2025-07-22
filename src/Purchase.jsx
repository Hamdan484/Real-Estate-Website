import React from 'react'

function Purchase() {
  const getNumber=()=>{
alert("0597788861")
  }
  return (
    <div className='purchase'>
      <h1>Get number</h1>
      To view number,first enter your contact info .If you are unable to reach the owner/broker then they can reach you.
      <form method="POST">
        <input type="text"placeholder='your name' />
        <br />
        <input type="text" placeholder='your phone number' /><br />
        <button onClick={getNumber}>Get Number</button>
      </form>
    </div>
  )
}

export default Purchase
