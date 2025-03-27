


import React from "react";
import dummy from "/home.png"
import json from "../assets/product.json"

const Collection = () => {
    return(
        <>
        <h1>DATAS</h1>

        {/* <section>
            <div className="box">
                <img src={dummy} alt="img2" />
                <h3>Producte Name</h3>
                <h3>PRICE : $500 </h3>
                <h3>RATTING❌</h3>
            </div>
        </section> */}
            {/* <center> */}
                {/* <table>
                    <thead>
                        <tr>
                        <th>IMG</th>
                        <th>PRODUCT NAME</th>
                        <th>PRICE</th>
                        <th>MODEL</th>
                        <th>STORAGE</th>
                        <th>BATTERY</th>
                        <th>CAMERA</th>
                        </tr>
                    </thead>
                    <tbody> 

                    {json.map((items) => (
                        <tr key={items.Name} >
                            <td><img src={items.img1} className="tableimg"/></td>
                            <td>{items.product_Name}</td>
                            <td>{items.Price}</td>
                            <td>{items.Model}</td>
                            <td>{items.Storage}</td>
                            <td>{items.Battery}</td>
                            <td>{items.Camera}</td>
                        </tr>
                        
                    ))}
                    </tbody>
                </table> */}
                <div className="container">
               {json.map((items) => (
                
                <div className="databox">
                    <img src={items.img1} className="tableimg"/>
                    <h3>Mobile Name : {items.product_Name}</h3>
                    <h3>Price : {items.Price}</h3>
                    <h3>Mobile Model : {items.Model}</h3>
                    <h3>Storage : {items.Storage}</h3>
                    <h3>Battery Health : {items.Battery}</h3>
                    <h3>Camera : {items.Camera}</h3>
                    <h3><a href="#">BUY NOW</a><a href="#" className="">ADD TO CART</a></h3>
                </div>
               
               ))}

               </div>
            {/* </center> */}

        </>
    )
}
export default Collection;




