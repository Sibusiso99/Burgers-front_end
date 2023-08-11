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
            {burgers.map((burger)=>(
                <div className="burger" key={burger.id}>
                    {burger.cover&&<img src={burger.cover} alt="" />}
                    <h2>{burger.name}</h2>
                    <p>{burger.description}</p>
                    <span>{burger.price}</span>
                </div>
            ))}
        </div>
        <button>
           <a href="/add">Add Burger</a>
        </button>
    </div>
}

export default Burgers