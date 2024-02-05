import clases from "./CartWidget.module.css"
import carrito from "./assets/cart.png"
import { useCart } from "../../context/CartContent"
import { Link } from "react-router-dom" 

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div className={clases.divCart}>
            <Link to={'/Cart'}><img className={clases.divCartImg} src={carrito} alt="carrito"/></Link>
            {totalQuantity}
        </div>
    )
}

export default CartWidget 