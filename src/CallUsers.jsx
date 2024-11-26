import React from 'react'
import CustomHook from './CustomHook/CustomHook'
import Fetch from './UseEffect/Fetch';

const CallUsers = () => {
// this is a component where you can call your logic side components eg:CustomHook

    const users = CustomHook();
    console.log(users);
    
 return (
            <div>
            <ul>Users Below
            {  users.map(item => {
               return <a href={item.html_url}><li>{item.login}</li></a>;               
                })
            }
            </ul>
            </div>
    )
}

export default CallUsers