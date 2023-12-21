import clases from "./CartWidget.module.css"
import carrito from "./assets/cart.png"

const CartWidget = () => {
    return (
        <div className={clases.divCart}>
            <img className={clases.divCartImg} src={carrito} alt="carrito"/>
            0
        </div>
    )
}

export default CartWidget 