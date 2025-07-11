
import React from "react"

import ReactDOM from "react-dom/client"



const Header = () => {
    return (
        <div className="header">
            <div className="Logo-container">
                <img scr = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s' alt="logo"/>
            </div>
            <div className="Nav-item"> 
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

const Restaurant = (props) => {
    return (
        <div className="res-card"   style={{backgroundColor: "gray"}}>
            <img className="res-logo"
            src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/cvo1djhbwrgfqd64k0tl" alt = "res-img"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
        </div>

    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <h3>Search</h3>
            </div>
            <div className="restaurant-container">
                <Restaurant
                resName = "Meghna foods"
                cuisine = "Biryani north Indian"
                rating = "4.3 rating"/>

                <Restaurant
                 resName = "KFC"
                cuisine = "Burger"
                rating = "4.5 rating"/>

                <Restaurant
                 resName = "Roti wala"
                cuisine = "Tawa roti"
                rating = "4.2 rating"/>

                <Restaurant
                 resName = "Kisaan"
                cuisine = "Momos"
                rating = "4.7 rating"/>

                <Restaurant
                 resName = "hungries"
                cuisine = "Pizza"
                rating = "4.3 rating"/>

                <Restaurant
                 resName = "Origano"
                cuisine = "Masala-Dosa"
                rating = "4.4 rating"/>

                <Restaurant
                 resName = "Janak Dhaba"
                cuisine = "kadai paneer"
                rating = "4.5 rating"/>
              
                      
            </div>

        </div>
    )
}

const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>)
