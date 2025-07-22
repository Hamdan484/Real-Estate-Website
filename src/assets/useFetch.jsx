import React, { useState,useEffect } from 'react';


function UseFetch(URL) {
 const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

   useEffect(() => {
    fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error fetching data"); 
        }
        return response.json(); 
      })
      .then(data => {
        setData(data);
        setIsPending(false);
      })
      .catch(error => {
        alert("Error fetching data!"); 
        console.log(error.message);
        setIsPending(false); 
      });
  }, [URL]);

return {isPending,data}
}

export default UseFetch
