import React, {useState} from "react"

function Image(props) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className={`${props.className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
            {hovered &&
                <div>
                    <i className="ri-heart-line favorite"></i>
                    <i className="ri-add-circle-line cart"></i>
                </div>
            }
            <img src={props.img.url} className="image-grid"/>
        </div>
    )
}

export default Image