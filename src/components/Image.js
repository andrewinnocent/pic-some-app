import React, {useState, useContext} from "react"
import PropTypes from 'prop-types';
import {Context} from '../components/AppContext'

function Image(props) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart} = useContext(Context)

    const heart = props.img.isFavorite && <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.img.id)}></i>
    
    return (
        <div
            className={`${props.className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
            {heart}
            {hovered &&
                <div>
                    <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.img.id)}></i>
                    <i className="ri-add-circle-line cart" onClick={() => addToCart(props.img)}></i>
                </div>
            }
            <img src={props.img.url} className="image-grid"/>
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