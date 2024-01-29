import clases from "./CartWidget.module.css"
import carrito from "./assets/cart.png"
import Cart from "../Cart/Cart"

const CartWidget = () => {
    const cart = () => {
        return (
            <Cart/>
        )
    }

    return (
        <div className={clases.divCart}>
            <img className={clases.divCartImg} src={carrito} alt="carrito" onClick={cart}/>
            0
        </div>
    )
}

export default CartWidget 