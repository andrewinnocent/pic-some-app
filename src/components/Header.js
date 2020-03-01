import React, {useContext} from "react"
import {Link} from 'react-router-dom'
import {Context} from '../components/AppContext'

function Header() {
	const {cartItems} = useContext(Context)

	return (
		<header>
			<Link to="/"><h2>Pic Some</h2></Link>
			<Link to="/cart"><i className={`ri-shopping-cart-${cartItems.length ? "fill" : "line"} ri-fw ri-2x`}></i></Link>
		</header>
	)
}

export default Header
