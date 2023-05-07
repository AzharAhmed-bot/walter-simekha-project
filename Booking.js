import React, { useState ,useEffect} from "react";

function Booking({data,setData}){
   const [buy,setBuy]=useState([]);
    const[location,setLocation]=useState({
        pickup:'Nairobi',
        destination:''
    });
    const [filteredList, setFilteredList] = useState([]);

     function handleChange(e){
       setLocation({
       ... location,
        [e.target.name]:e.target.value
       })
     }
     function handleClick(data){
        console.log("Clicked" ,data.destination)
        let newCapacity=data.capacity-1
        data.capacity = newCapacity;
        if(data.capacity>0){
        fetch(`http://localhost:8001/trips/${data.id}`,{
            method:"PATCH",
            headers:{"Content-Type":"Application/json"},
            body:JSON.stringify({capacity:newCapacity})
        })
        .then(resp=>resp.json())
        .then((updatedData)=>{
            alert("Ticket successfully booked");
            const newData = data.map((d) =>
            d.id === updatedData.id ? updatedData : d
          );
          setData(newData);
          setFilteredList((prevList) =>
            prevList.map((item) => {
              if (item.id === updatedData.id) {
                return {
                  ...item,
                  capacity: updatedData.capacity,
                };
              }
              return item;
            })
          );
        })
    }
    else if(data.capacity===0){
        fetch(`http://localhost:8001/trips/${data.id}`,{
            method:'DELETE',
            headers:{"Content-Type":"Application/json"}
        })
        .then(resp=>resp.json())
        .then(data=>{
         //const newFilteredList= setFilteredList(data.filter((d)=>d.id!==data.id))
          setBuy(data)
            alert("Booking full please select a different Coach")
            console.log(data)})
    }
      
     }

     function handleSubmit(e){
        e.preventDefault();
       // console.log(location.pickup,location.destination)
        const filteredData = data.filter(
            (item) => item.destination === location.destination
        );
        
        const filterList= filteredData.map((datum,index)=>{
            return(
                <div id="card-list" key={index}>
                <p id="text">COACH:{datum.coach}</p>
                <img src={datum.image}></img>
                <p id="text">Pick-up: {datum.pickup}</p>
                <p id="text">Destination: {datum.destination}</p>
                <p id="text">{datum.description}</p>
                <p id="text">KSH:{datum.price}</p>
                <p id="text">Tickets Available:{datum.capacity}</p>  
                <button id="button"onClick={()=>handleClick(datum)}>Buy Ticket</button>
              </div>
            )
        })
        setFilteredList(filterList); 
        console.log(filteredList.capacity)// update filteredList using setFilteredList
     }
    return(
        <div>
        <h1>Welcome to our booking page please select your Destination</h1>
        <form id="form-search" onSubmit={handleSubmit}>
            <label htmlFor="dropdown">Pick up</label>
            <select id="dropdown" name="pickup" onChange={handleChange}>
                <option value="option1">Nairobi</option>   
            </select>
            <label htmlFor='dropdown'>Destination</label>
            <select id="dropdown" name="destination" onChange={handleChange}>
                <option>Namanga</option>
                <option >Mombasa</option>
                <option >Kitale</option>
                <option >Kisumu</option>
                <option >Embu</option>
                <option >Nakuru</option>
                <option >Garissa</option>
                <option >Mandera</option>
                <option>Mandera</option>
                <option >Bungoma</option>
            </select>
         <input type="submit" value="Search Trip"></input>
        </form>
        <div id="container3">
        {filteredList}
        </div>
        </div>
    )
    
}
export default Booking;
