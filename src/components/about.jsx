


// import React from "react";
// import { useLocation } from "react-router-dom";

// const About = () => {
//     const location = useLocation()
//     console.log(location)
//     return (
//         <>
        
//         <h1>About</h1>
//         <p>Current Path : {location.pathname}</p>


        
        
//         </>
//     )
// }
// export default About ;


import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time,setTime]=useState(0)
  const [running,setRunning]=useState(false)

  useEffect(()=>{
    let interval;
    if(running){
      interval=setInterval(()=>{
        setTime((prevTime)=>prevTime + 10)
      },1000)
    }
    else if(!running){
      clearInterval(interval)
    }
    return ()=> clearInterval(interval)
  },[running])

  return (
    <>
     <h2>Stopwatch</h2>
   
    <div>
     <span> {('0'+ Math.floor((time/60000)%60)).slice(-2)}:</span>
     <span> {('0'+ Math.floor((time/1000)%60)).slice(-2)}:</span>
     <span> {('0'+ ((time/10)%100)).slice(-2)}:</span>
    </div>
    <div> 
    {running ? (
      <button onClick={()=>{setRunning(false)}}>  Stop</button>
      ):(
      <button onClick={()=>{setRunning(true)}}>  Start</button>
      )

    }
    <button onClick={()=>{setTime(0)}}>  Reset</button>
    </div>
     </>
  );
};

export default Timer;