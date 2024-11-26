import React, { useEffect, useState } from 'react'
import multiple from "./multiple.css";

export const Multiple = () => {
    const [users,setUsers] = useState();
    const [isLoading,setisLoading] = useState(true);
    const [error,setError]=useState(null);
  
    // useEffect with async ,try catch, await.
    useEffect(()=>{
        async function fetchUsers(){
          try{
            const response = await fetch('https://api.github.com/users');
            const data = await response.json();
            setUsers(data);
            setisLoading(false);
          }catch(error){
            setError(error);
            setisLoading(false);
          }
        }

        fetchUsers(); 
    })

    if(isLoading){
      return <div className='loading'>Loading...</div>;
    }

    if(error){
      return <div className='errorBoard'>Error: {error.message}</div>;
    }

  return (    

    <div>
      <h1>Multiple User List</h1>

    <div>
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>{user.login}</li>
            ))
        }
      </ul>
    </div>

    </div>
  )
}
