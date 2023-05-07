import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function About({abouts}){
 const navigate=useNavigate()
  // console.log(abouts)
function handleChange(){
    alert("By clicking you accept our Agreement are you sure you want to continue?")
   navigate("/home")
}
  const aboutList=  abouts.map((about,index)=>{
        return(
            <div key={index}>
               <h1>{about.title}</h1>
               <p>{about.description}</p>
               <p>{about.navigate}</p>
               <p>For More information reach to us via email or phone number below:</p>
               <ul style={{listStyle:'none'}}>
                <li>{about.information[0]['email 1']}</li> 
                <li>{about.information[0]['email 2']}</li> 
                <li>Telephone:{about.information[0]['phone 1']}</li> 
                <li>Telephone:{about.information[0]['phone 2']}</li> 
                </ul>
                <p style={{color:"red"}}>{about.license}</p>
                <input type="checkbox"></input>
                 <button id="button"  onClick={handleChange}>Accept our terms of Agreement</button>
            </div>
        )
    })
return(
    <div>
        {aboutList}
    </div>
)


}
export default About