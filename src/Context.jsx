import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [ordering, setOrdering] = useState(false)

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function placeOrder(){
        setOrdering(true)
        setTimeout(function(){
            console.log("order placed")
            setCartItems([])
            setOrdering(false)
        }, 3000)
    }

return (
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            cartItems, 
            addToCart, 
            removeFromCart, 
            placeOrder, 
            ordering}}
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}