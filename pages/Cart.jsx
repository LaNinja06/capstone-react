import React, {useContext} from "react"
import {Context} from "/src/Context"
import CartItem from "/components/CartItem"

function Cart() {
    const {cartItems, ordering, placeOrder} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
   
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ? 
                
                    <div className="order-button">
                        <button onClick={placeOrder}> 
                        {ordering ? "Ordering.." : "Place Order"}
                        </button>
                    </div>
                : <p>Your cart is empty</p>
            }
        </main>
    )
}

export default Cart