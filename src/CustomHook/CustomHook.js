import React,{useState,useEffect} from 'react'


const CustomHook = () => {

    const [user,setUsers] = useState([]);
        useEffect(()=>{
            fetch('https://api.github.com/users').then(response => response.json()).then(data => setUsers(data));            
        },[]);

        return user;

        // return (
        //     <div>
        //     <ul>Users Below
        //     {  user.map(item => {
        //        return <a href={item.html_url}><li>{item.login}</li></a>;               
        //         })
        //     }
        //     </ul>
        //     </div>
        // )
    // will call the users as a component to get called in other files.

}

export default CustomHook