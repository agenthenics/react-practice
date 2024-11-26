import React, { useState } from "react";
import form from "./form.css"

const Form =() => {

    // multiple useState
    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [phone,setPhone] = useState("");
    
    // Below where the multiple functions

    // const checkName=(e)=>{
    //     console.log(e.target.value);
    //     setName(e.target.value);
        
    // }
    // const checkEmail=(e)=>{
    //     console.log(e.target.value);
    //     setName(e.target.value);
        
    // }
    // const checkPhone=(e)=>{
    //     console.log(e.target.value);
    //     setName(e.target.value);
    // }
    const [user, setUser] = useState({ name: "", email: "", phone: "" });

    const handleInput = (e) =>{
        e.preventDefault();
        // console.log(e.target.name);
        const {name,value} = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }

    // One handle Form useState
   
    
    return (
        <div class="col-plain">
            <form>

                <label for="name">Name:</label>
                <input className="form-input" type="text" id="name" name="name" onKeyUp={handleInput} />
                <br/>
                <label for="email">Email:</label>
                <input className="form-input" type="email" id="email" name="email"  onKeyUp={handleInput} />
                <br/>
                <label for="phone">Phone:</label>
                <input className="form-input" type="tel" id="phone" name="phone" onKeyUp={handleInput} />

                <button className="submitBtn" >Submit</button>
            </form>
        </div>
)

}

export default Form