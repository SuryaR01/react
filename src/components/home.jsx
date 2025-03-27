



import React from "react";
import home_img from "/home.png"
import aboutimg from "/images/mechanic-logo-free-vector.jpg"
import json from "../assets/product.json"



const Home = () =>{
    return (
        <>
        <section>
            <div className="Home">
                <img src={home_img} alt="home_img" />
            </div>
        </section>
<hr />
        <section className="About">
            <div className="imgbox">
                <img src={aboutimg} alt="About_img" />
            </div>

            <div className="Content">
                <h3>About AS</h3>            
                <p> we have been providing reliable, high-quality auto repair services for [X] years. Our team of certified mechanics is dedicated to ensuring your vehicle runs at its best. From routine maintenance to major repairs, we handle it all with professionalism and care.
                    We pride ourselves on our customer-first approach, transparent pricing, and fast turnaround times. Whether it's a simple oil change, brake repair, or engine diagnostics, trust us to get you back on the road safely and efficiently.</p>
            </div>
        </section>
<hr />
        <section className="booking">
                <h1>PRODUCTS</h1>
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
                    <h3><a href="#">BUY NOW</a><a href="#">ADD TO CART</a></h3>
                </div>
               
               ))}

               </div>
        </section>
        </>
    )
}
export default Home ;