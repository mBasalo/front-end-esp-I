import React, { useState, useEffect } from 'react'
import './ApiCall.css'

function ApiCall() {
    const [data,setData] = useState([]);

    useEffect( () => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data));
    }, [0]);

  return (
    <div>

      <h1>useEffect Ejemplo</h1>

      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>



    </div>
  );

}


export default ApiCall