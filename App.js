
import './App.css';
import NavBar from './NavBar';
import logo from '/home/azhar/reactt-project-crypto/src/AZAT.png'
import About from './About';
import { Route,Routes } from 'react-router-dom';
import Login from './Login';
import Logo from './Logo';
import Home from './Home';
import Booking from './Booking';
import { useState,useEffect } from 'react';
function App() {
  const[data,setData]=useState([])
  const [abouts,setAbouts]=useState([])
  const [accounts,setAccounts]=useState([])
  function fetching(){
  fetch("http://localhost:8001/trips")
  .then(resp=>resp.json())
  .then(data=>setData(data))
}
  useEffect(()=>fetching(),[])
  function fetching2(){
    fetch("http://localhost:8001/About")
    .then((resp=>resp.json()))
    .then(data=>setAbouts(data))
       }

       useEffect(()=>fetching2(),[])
    function fetching3(){
      fetch("http://localhost:8001/Accounts")
      .then(resp=>resp.json())
      .then(data=>setAccounts(data))
    }
      useEffect(()=>fetching3(),[])
     const allEmails=accounts.map((datum)=>{return datum.email})
    // console.log(allEmails)
      
  return (
    
    <div className="App">
      <Logo logo={logo}/>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home data={data} fetching={fetching}/>}/>
        <Route path='/about' element={<About abouts={abouts}/>}/>
        <Route path='/login' element={<Login allEmails={allEmails} />}/>
        <Route path='/booking' element={<Booking data={data} setData={setData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
