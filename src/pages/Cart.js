import React, {useState, useContext, useEffect} from "react"
import {Context} from "../components/AppContext"
import CartItem from "../components/CartItem"


function Cart() {
    const PRICE = 5.99
    const [total, setTotal] = useState(0)
    const {cartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
      <CartItem
        key={item.id}
        item={item}/>
    ))
    
    useEffect(() => setTotal(cartItems.length * PRICE), [cartItems])

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart