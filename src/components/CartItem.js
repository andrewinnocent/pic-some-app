import React, {useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../components/AppContext"
import useHover from '../utils/useHover'


// I can object destructure props right in the function arguments.
function CartItem({item}) {
  const [hovered, ref] = useHover()
  const {removeFromCart} = useContext(Context)

  return (
    <div className="cart-item">
      <i
        ref={ref}
        className={`ri-delete-bin-${hovered ? "fill" : "line"}`}
        onClick={() => removeFromCart(item.id)}
        ></i>
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