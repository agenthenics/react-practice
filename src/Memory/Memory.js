import React, { useState } from 'react'
import NewComp from './NewComp'
import UseEffect from '../UseEffect/UseEffect'

// what is memo?
// In React, memo is a higher-order component (HOC) that is used to optimize functional components by preventing unnecessary re-renders. It does this by performing a shallow comparison of the component's props. If the props have not changed between renders, React skips rendering the component and reuses the last rendered output. This can lead to performance improvements, especially in applications with many components or complex rendering logic.

// useMemo vs UseEffect?
// useEffect is primarily used for handling side effects, such as data fetching, subscriptions, or manually changing the DOM. It runs after the component renders and can be triggered by changes in state or props.

// On the other hand, useMemo is used for memoizing values, which means it caches the result of a computation and only recalculates it when its dependencies change. This is particularly useful for optimizing performance by avoiding expensive calculations on every render.

// Key Differences

// Purpose:

// useEffect: Handles side effects after rendering.
// useMemo: Caches computed values to avoid unnecessary recalculations.
// Execution Timing:

// useEffect: Runs after the render is committed to the screen.
// useMemo: Runs during rendering to compute and cache a value.
// Return Value:

// useEffect: Does not return a value; it can optionally return a cleanup function.
// useMemo: Returns the memoized value.

const Memory = () => {
  
  const [count,setCount] = useState(0);
    const [input,setInput] = useState('');

    function handleinput(e){
        setInput(e.target.value)
    }

    // function slowfunction(){

    //     for (let index = 1; index < 100000; index++) {
    //        console.log('Slow function');          
    //     }
    // }

    // slowfunction();

    return (
    <div><b>Memory:{count}</b><br></br>
    <button onClick={()=>setCount(count+1)} >Click here to increase</button>  
        <br/>
    <input type='text' value={input} onChange={handleinput}/>
        <hr/>

        <NewComp newCount={count}/>
        <br/>
    <h3>Input: { input}</h3>
    </div>
  )
}
export default Memory