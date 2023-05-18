import React, {useState, useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "/src/Context"

function Header() {
    const {cartItems} = useContext(Context)

    const cartIconToShow = cartItems.length > 0 ? <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> :  <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    
    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                {cartIconToShow}                
            </Link>
        </header>
    )
}

export default Header
