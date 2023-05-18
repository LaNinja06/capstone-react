import React, {useContext} from "react"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"
import {Context} from "/src/Context"


function Image({className, img}) {
    const [hovered, ref] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    
    const addedToCart = cartItems.some(item => item.id === img.id)
    const cartIcon = addedToCart? 
    <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i> 
    :
    hovered &&
    <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        

    return (
        <div 
            className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
