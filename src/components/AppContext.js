import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider(props) {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
      .then(resp => resp.json())
      .then(data => setPhotos(data))
  }, [])
  
  function toggleFavorite(id) {
    const mutablePhotos = [...photos]

    mutablePhotos.forEach(photo => {
      if (photo.id === id) {
        photo.isFavorite = !photo.isFavorite
      }})

    setPhotos(mutablePhotos)
  }

  return(
    // Though `photos` is an Array, pass it in an Object for easier manipulation throughout the app.
    <Context.Provider value={{photos, toggleFavorite}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}