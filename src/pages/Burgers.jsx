import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Burgers = () => {

    const [burgers,setBurgers] = useState([])

    useEffect(() =>{
        const fetchAllBurgers = async ()=>{
            try{
                const res = await axios.get("http://localhost:8080/types")
                setBurgers(res.data);
                console.log(res)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBurgers()
    },[])
    return <div>
        <h1>Sibusiso Burgers</h1>
        <div className="burgers">
            {burgers.map(burger=>(
                <div>
                    {burger.cover&&<img src={burger.cover} alt="" />}
                </div>
            ))}
        </div>
    </div>
}

export default Burgers