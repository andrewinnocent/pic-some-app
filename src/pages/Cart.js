import React, {useState, useContext} from "react"
import {Context} from "../components/AppContext"
import CartItem from "../components/CartItem"


function Cart() {
  const {cartItems, emptyCart} = useContext(Context)
  const [loading, setLoading] = useState(false)
  const total = 5.99 * cartItems.length
  const cartItemElements = cartItems.map(item => (
    <CartItem
      key={item.id}
      item={item}/>
  ))

  function placeOrder() {
    setLoading(true)
    const timeoutId = setTimeout(() => {
      setLoading(false)
      alert('Order placed!')
      emptyCart()
      
    }, 3000)
    return () => clearTimeout(timeoutId)
  }

  return (
      <main className="cart-page">
          <h1>Check out</h1>
          {cartItemElements}
          <p className="total-cost">Total: {total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
          {!cartItems.length && <p>Your cart is empty. Please add some photos!</p>}
          <div className="order-button">
              <button onClick={placeOrder} disabled={!cartItems.length}>{loading ? "Ordering..." : "Place Order"}</button>
          </div>
      </main>
  )
}

export default Cart