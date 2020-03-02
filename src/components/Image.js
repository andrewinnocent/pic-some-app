import React, {useContext} from "react"
import PropTypes from 'prop-types';
import {Context} from '../components/AppContext'
import useHover from '../utils/useHover'

function Image(props) {
    const [hovered, ref] = useHover()
    const {toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context)
		
    function heartIcon() {
			if (props.img.isFavorite) {
				return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.img.id)}></i>
			} else if (hovered) {
				return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.img.id)}></i>
			}
		}
		
		function cartIcon() {
			const inCartAlready = cartItems.some((item) => item.id === props.img.id)
			
			if (inCartAlready) {
				return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(props.img.id)}></i>
			} else if (hovered) {
				return <i className="ri-add-circle-line cart" onClick={() => addToCart(props.img)}></i>
			}
		}
    
    return (
        <div
						ref={ref}
            className={`${props.className} image-container`}
            >
            {heartIcon()}
            {cartIcon()}
            <img src={props.img.url} alt={props.img.url} className="image-grid"/>
        </div>
    )
}

Image.propTypes = {
	className: PropTypes.string,
	img: PropTypes.shape({
		isFavorite: PropTypes.bool,
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}),
}

export default Image