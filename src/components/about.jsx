


import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation()
    console.log(location)
    return (
        <>
        
        <h1>About</h1>
        <p>Current Path : {location.pathname}</p>
        
        </>
    )
}
export default About ;