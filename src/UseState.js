import React, { useState } from 'react'


const UseState = () => {
    console.log(1234);
    const [count,setCount] = useState(0);

    const handleFunctionInc  = () => {
        setCount(count+2);
    }

    const handleFunctionDec  = () => {
        setCount(count-2);
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleFunctionInc}>Add Value</button>
            <button onClick={handleFunctionDec}>Sub Value</button>
        </div>
        );
}
export default UseState;

