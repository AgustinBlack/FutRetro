import { createContext, useContext } from "react"
import { useState } from "react"

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (productoToAdd) => {
      if(!IsInCart(productoToAdd.id)) {
        setCart(prev => [...prev, productoToAdd])
      } else (
        console.log("error")
      )
    }
  
    const IsInCart = (id) => {
      return cart.some(prod => prod.id === id)
    } 
  
    const removeItem = (id) => {
      const cartUpdated = cart.filter(prod => prod.id !== id)
      setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
      let accu = 0

      cart.forEach(prod => {
          accu += prod.quantity * prod.precio
      })

      return accu
    }

    const total = getTotal()

    const clearCart = () => {
      setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}