import {useState, useEffect, useRef} from "react"

function useHover() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    // Resolve React warning: The ref value 'ref.current' will likely have changed by the time this effect cleanup function runs. If this ref points to a node rendered by React, copy 'ref.current' to a variable inside the effect, and use that variable in the cleanup function.
    const currentNode = ref.current
    currentNode.addEventListener("mouseenter", enter)
    currentNode.addEventListener("mouseleave", leave)
    
    // Clear the side effects by returning a function that does that.
    return () => {    
      currentNode.removeEventListener("mouseenter", enter)
      currentNode.removeEventListener("mouseleave", leave)
    }
  }, [])

  function enter() {
    setHovered(true)
  }

  function leave() {
    setHovered(false)
  }

  // Provide the state and ref to be used in components using this hook.
  return [hovered, ref]
}

export default useHover