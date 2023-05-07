import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({allEmails}){
    const navigate=useNavigate();
    const [search,setSearch]=useState({
        firstName:'',
        lastName:'',
        tell:'',
        email:'',
        password:''
    })
  function handleChange(e){
   //console.log(e.target.value)
   setSearch({
    ...search,
    [e.target.name]:e.target.value
   })
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (search.password.length < 8) {
      alert("Password must be at least 8 characters.Make sure to choose a strong password");
    }
     else if(allEmails.includes(search.email)){
       alert("Email already taken please choose a different one")
     } 
    else {
      console.log(search);
      fetch("http://localhost:8001/Accounts", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          firstname: search.firstName,
          lastname: search.lastName,
          tell:search.tell,
          email: search.email,
          password: search.password,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
            if(data.email)
          alert(` Welcome ${search.firstName} Your information has been  successfully saved`);
          console.log(data.email);
        });
      navigate("/about");
    }
  }
  
return(
 <div id="container2">
    <form className="form-input" onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" placeholder="Enter First name" name="firstName" onChange={handleChange}></input><br></br>
        <label>Last Name:</label>
        <input type="text" placeholder="Enter Last name" name="lastName" onChange={handleChange}></input><br></br>
        <label>Phone number:</label>
        <input type="text" placeholder="Enter phone number" name="tell" onChange={handleChange}></input><br></br>
        <label>Email:</label>
        <input type="text" name="email" placeholder="Enter email" onChange={handleChange}></input><br></br>
        <label>Password:</label>
        <input type="password"  name="password" onChange={handleChange}></input>
        <input id="button" type="Submit" ></input>
    </form>
 </div>
)

}
export default  Login;