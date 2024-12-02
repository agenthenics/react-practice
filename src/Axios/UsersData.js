import React, { useEffect,useState } from 'react'
import axios from 'axios';

const UsersData = () => {
    
    const [data, setData] = React.useState([]);
    const [name,setName] = useState([]);
    const newItem = {
        id:Date.now(),title:name,body:name          // new variable to store value
    }

    const url = 'https://jsonplaceholder.typicode.com/posts';

    // it call the api to fetch the data
    useEffect(()=>{
        axios.get(url).then((response)=>setData(response.data)).catch((error)=>{
            console.log("Error Fetching issues".error);
        })
    },[])

   function handleSubmit(e){
     e.preventDefault();
     axios.post("https://jsonplaceholder.typicode.com/posts", newItem)
       .then((response) =>
         setData([...data, response.data])
       );
       setData([''])   // it refresh the call
   }
    
    function handleChange(e){
        setName(e.target.value);  //  it change and set the value        
    }

  return (
    <div> <h2>Checking axios function</h2>
        <form onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={handleChange} />
    <button >Add Data</button>
        </form>
           { data.map(item => (
            <p>{item.title}</p>                         
            )
            )}    
    </div>
  )
}

export default UsersData