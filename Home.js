import React  from "react";


function Home({data,fetching}){
  
 function handleClick(id){
    //console.log("clicked id" ,id)
    const newPrice= prompt("Enter New Price")
     fetch(`http://localhost:8001/trips/${id}`,{
        method:"PATCH",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify({price:newPrice})
     })
     .then(resp=>resp.json())
     .then(data=>{{
        fetching()
        console.log(data)}})
 }


 const dataList=Array.isArray(data) && data.map((datum,index)=>{
    return(
        <div id="card-list" key={index}>
          <p id="text">COACH:{datum.coach}</p>
          <img src={datum.image}></img>
          <p id="text">Pick-up: {datum.pickup}</p>
          <p id="text">Destination: {datum.destination}</p>
          <p id="text">{datum.description}</p>
          <p id="text">KSH:{datum.price}</p>
          <p id="text">Passengers:{datum.capacity}</p>  
          <button id="button" onClick={()=>handleClick(datum.id)} >Change Price</button>
        </div>
    )
})
return(
    <>
    <div id="container">
    {dataList}
    </div>
    </>
)



}
export default  Home;