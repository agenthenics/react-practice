import React, { useEffect, useState } from 'react';

const UseEffect = () =>{
    const [Count,setCount] = useState(0);


    useEffect(()=>{
        console.log('We are in use State');

        return (
            () =>{
                console.log('return of use state') ;             
            }
        )
    },[Count]);

  return  <div>
                <h1>hey There,
                    Increment By {Count}</h1>
                <button onClick={()=>setCount(Count+1)}>Click to Increase</button>
            </div>
}
export default UseEffect

