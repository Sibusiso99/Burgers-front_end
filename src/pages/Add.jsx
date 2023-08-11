import React, { useState } from 'react'

const Add = () => {

    const [burger,setBurger] = useState({
        name:"",
        description:"",
        price:null,
        cover:""
    })

    const handleChange = (e) =>{
        setBurger(prev=>({...prev,[e.target.name]: e.target.value}));
    };
    console.log(burger)
    return (
        <div className='form'>
            <h1>Add Burger</h1>
            <input type="text" placeholder="name" onChange={handleChange } name="name"/>
            <input type="text" placeholder="description" onChange={handleChange } name="description"/>
            <input type="number" placeholder="price" onChange={handleChange } name="price"/>
            <input type="text" placeholder="cover" onChange={handleChange } name="cover" />
        </div>
    )
}

export default Add