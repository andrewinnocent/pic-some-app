import React, {useState, useContext} from "react"
import {Context} from '../components/AppContext'

function Image(props) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    return (
        <div
            className={`${props.className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
            {hovered &&
                <div>
                    <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.img.id)}></i>
                    <i className="ri-add-circle-line cart"></i>
                </div>
            }
            <img src={props.img.url} className="image-grid"/>
        </div>
    )
}

export default Image