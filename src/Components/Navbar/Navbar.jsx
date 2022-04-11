import React from 'react'
import "./Navbar.css"
import logo from "../../Assets/Images/MaxProff.svg"
import search from "../../Assets/Images/search.svg"
import heart from "../../Assets/Images/heart1.svg"
import chart from "../../Assets/Images/chart1.svg"
import shop from "../../Assets/Images/shopcard1.svg"
import enter from "../../Assets/Images/enter.svg"

function Navbar() {
    return (
        <>
          <div className="main_navbar">
                <div className="logo">
                    <img src={logo} alt="photo" />
                </div>
                
                <form className="search_input" >
                    <input type="search" className="inptse" placeholder="Искать товары" />
                    <button type="submit" id='search'>
                        <img src={search} alt="photo" />
                    </button> 
                </form>
                
                <div className="icons_part">
                        <img src={heart} alt="photo" />
                        <img src={chart} alt="photo" />
                        <img src={shop} alt="photo" />
                        <img src={enter} alt="photo" />
                </div>

          </div> 
        </>
    )
}

export default Navbar
