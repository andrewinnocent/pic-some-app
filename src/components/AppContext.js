import React, {useState} from 'react'

const Context = React.createContext()

function ContextProvider(props) {
  const [photos, setPhotos] = useState([])

  return(
    // Though `photos` is an Array, pass it in an Object for easier manipulation throughout the app.
    <Context.Provider value={{photos}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}