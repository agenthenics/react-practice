import React, { useEffect,useState } from 'react'

const Fetch = () => {
  
//   use state to store data

    const [user,setUsers] = useState([]);

// use Effect to the get data from the api

    useEffect(()=>{
        fetch('https://api.github.com/users').then(response => response.json()).then(data => setUsers(data));
        
    });
  
    return (
    <div>
        <h1>Fetch User from The API</h1>
        <ul>Users Below
          {  user.map(item => {
               return <a href={item.html_url}><li>{item.login}</li></a>;               
            })
            }
        </ul>
    </div>
  )
}

export default Fetch