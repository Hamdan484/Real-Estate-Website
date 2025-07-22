import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Practical() {
  const [names, setNames] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const controller=new AbortController();

    fetch('http://localhost:3001/blogs',{signal:controller.signal})
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then(data => {
        setNames(data);
        setIsPending(false);
      })
      .catch(error => {
      if(controller==="AbortError"){console.log("fetch aborted")
           
          }
           else{ console.log("error fetching data")}
      });

   
    return () => {
     controller.abort()
    };
  }, []);

  return (
    <div>
      {isPending && "Loading..."}
      <h1>User List</h1>
      
      
     <ul>
  {names.map(name => (
    <li key={name.id}>
      <Link to={`/names/${name.id}`}>
        {name.title} : {name.body} : {name.author}
      </Link>
    </li>
  ))}
</ul>

      
    </div>
  );
}

export default Practical;
