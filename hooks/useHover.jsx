import { useState, useEffect, useRef} from "react";

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    // Keep track of hover state in this hook
    
    // functions that set the hovered set accordingly (true when entered, false when left)
		function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }		
	
    // when this hook first loads, it sets up the "mouseenter" and "mouseleave" event listeners on the ref.
    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)
        
    // Remember: the ref.current will represent the DOM node, which is where I can
    // do imperative commands like `.addEventListener` and `removeEventListener`.
    
        // return () => {    
        //     ref.current.removeEventListener("mouseenter", enter)
        //     ref.current.removeEventListener("mouseleave", leave)
        // }
    }, [])
    
    return [hovered, ref]
}

export default useHover