import React, {useContext} from "react"
import {Context} from '../components/AppContext'
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const {photos} = useContext(Context)
    const images = photos.map(photo => (
        <Image key={photo.id} img={photo} className={getClass(photo.id)} />
    ))
    
    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos