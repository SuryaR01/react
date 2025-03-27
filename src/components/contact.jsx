

import React, { useState } from "react";



const Contact = () => {

    const [fromdata , setFromdata] = useState({Name:"",Age:"",Email:"",Address:""})
    
    const changee = (Event) =>{
        const{name , value} = Event.target
        console.log(name,value)

        setFromdata((currentdata)=>{
            return{
                ...currentdata,
                [name]:value,
            }
        })
    }
    
    return (
        <>
        
        <h1>CONTACT DETAILS</h1>



            <form>
                <label>NAME :</label>
                <input type="text" name="Name"  value={fromdata.Name} onChange={changee}/><br />    

                <label>AGE :</label>
                <input type="text" name="Age"  value={fromdata.Age} onChange={changee}/><br />

                <label>E_MAIL :</label>
                <input type="text" name="Email"  value={fromdata.Email} onChange={changee}/><br />

                <label>ADDRESS :</label>
                <input type="text" name="Address"  value={fromdata.Address} onChange={changee}/>

                <button onClick={changee}>SUBMIT</button>

            </form>


        
        </>
    )
}

export default Contact;