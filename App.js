
import React from "react"

import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="Logo-container">
                <img scr = "https://images-platform.99static.com//Ba6VdSQsbU4OpiyQEzLi7yHy9KQ=/440x521:1494x1575/fit-in/500x500/99designs-contests-attachments/127/127439/attachment_127439993"></img>
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

const Applayout = () => {
    return (
        <div className="app">
            {Header}

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>)
