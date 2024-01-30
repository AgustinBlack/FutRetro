import clases from "./CartWidget.module.css"
import carrito from "./assets/cart.png"
import Cart from "../Cart/Cart"
import { useCart } from "../../context/CartContent"

const CartWidget = () => {
    const { totalQuantity } = useCart()

    const cart = () => {
        return (
            <Cart/>
        )
    }

    return (
        <div className={clases.divCart}>
            <img className={clases.divCartImg} src={carrito} alt="carrito" onClick={cart}/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget 