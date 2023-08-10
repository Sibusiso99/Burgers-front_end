import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Burgers = () => {
    const [burgers,setBurgers] = useState([])

useEffect(()=>{
    const fetchAllBurgers = async ()=>{
        try{
            const res = await axios.get("http://localhost:3000/types")
            console.log(res)
        }
        catch(err){
            console.log(err)
        }
    }
    fetchAllBurgers()
},[])

    return (
        <div>Burgers</div>
    )
}

export default Burgers