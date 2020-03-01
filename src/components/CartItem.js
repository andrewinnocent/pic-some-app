import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../components/AppContext"

// I can object destructure props right in the function arguments.
function CartItem({item, removeItem}) {
  const [hovered, setHovered] = useState(false)
  const {removeFromCart} = useContext(Context)

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${hovered ? "fill" : "line"}`}
        onClick={() => removeFromCart(item.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}></i>
      <img src={item.url} alt={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
      url: PropTypes.string.isRequired
  })
}

export default CartItem