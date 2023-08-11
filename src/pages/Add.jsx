import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const [burger,setBurger] = useState({
        name:"",
        description:"",
        price:null,
        cover:""
    })

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setBurger((prev)=>({...prev,[e.target.name]: e.target.value}));
    };
    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8080/types", burger)
            navigate("/burgers")
        }catch(err){
            console.log(err)
        }
    }
    console.log(burger)
    return (
        <div className='form'>
            <h1>Add Burger</h1>
            <input type="text" placeholder="name" onChange={handleChange } name="name"/>
            <input type="text" placeholder="description" onChange={handleChange } name="description"/>
            <input type="number" placeholder="price" onChange={handleChange } name="price"/>
            <input type="text" placeholder="cover" onChange={handleChange } name="cover" />

            <button className="formButton" onClick={handleClick}>Add</button>
        </div>
        
    )
}

export default Add