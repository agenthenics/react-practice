import React, { useState } from "react";
import arrayData from "./arrayData";

// console.log(arrayData);

const Data = () =>{
    const [nArray,setnArray] = useState(arrayData);
    // console.log(nArray);
    
    

    const handleClear = () => {
        setnArray([]);
    }

    const removeArray = (itemID) => {
        setnArray(nArray.filter(item=>item.id!==itemID))
    }
    
    const updateArray = (itemID) => {
     setnArray(nArray.map(
        items => {
            if(items.id === itemID){
                return {name: 'Updated Name'}
            }
            else{
                return items;
            }
        }
     ))
        
    }

    return (
        <div>
            {/* <h1>My Data</h1> */}
            <ul>
                {
                    nArray.map((items)=>{
                        return (
                            <li key={items.id}>{items.name}<br/>
                            <button onClick={()=>removeArray(items.id)}>Remove</button>
                            <button onClick={()=>updateArray(items.id)}>Update Item</button>
                            </li>
                            )                              
                        })
                }                     
            </ul>
            <button onClick={handleClear}>Clear Array</button>
        </div>
    )
}

export default Data