import React from 'react'
import UseEffect from '../UseEffect/UseEffect'

const UseLayoutEffect = () => {
    
    UseEffect(()=>{
        console.log('useLayoutEffect');
    });
    
    // UseLayoutEffect(()=>{
    //     console.log('useLayoutEffect');
    // });
    
    
    
    return (
    <div>UseLayoutEffect</div>
  )
}

export default UseLayoutEffect