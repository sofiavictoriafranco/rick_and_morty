import React from "react";
import { useState } from "react";
import validation from "./validation";


export default function Form(props){

    const [userData, setUserData] = React.useState({ 
        username: '', 
        password: ''
     });

     const [errors, setErrors] = React.useState({
        username:"",
        password:""
     })
     

     const handleInputChange = (event) => {

        const property = event.target.name;
        const value = event.target.value;

        setUserData({
            ... userData,
            [property]: value,
        })

        setErrors(validation({
            ... userData,
            [property]: value
        }))


     }

     const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
     }

    return ( 

        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input name= "username" type="text" value={userData.username} onChange={handleInputChange}/>
            {errors.username && <p >{errors.username}</p>}
            <label>Password: </label>
            <input name="password" type="password" value={userData.password} onChange={handleInputChange}/>
            {errors.password && <p >{errors.password}</p>}
            <button type="submit">Login</button>


        </form>



    )
}