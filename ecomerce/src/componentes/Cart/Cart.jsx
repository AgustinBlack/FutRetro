import clases from "./Cart.module.css"
import remove from "../../assets/remove.png"
import vaciar from "../../assets/delete.png"
import { useCart } from "../../context/CartContent"
import { Link } from "react-router-dom"

const Cart = () => {
    const { clearCart, totalQuantity, total, removeItem } = useCart()
    const {cart} = useCart()

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
            </div>
        )
    }

    return (
        <div className={clases.divPadre}>
            <h2>CARRITO DE COMPRAS</h2>
            <div className={clases.prodsCart}>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <div  className={clases.prodCart}>
                                    <p className={clases.nombre}>{prod.nombre} </p>
                                    <p>${prod.precio} </p>
                                    <p>Talle: {prod.talle} </p>
                                    <p>Cantidad: {prod.quantity}</p>
                                    <p>Subtotal: ${prod.quantity * prod.precio} </p>
                                    <button className={clases.removeItem} onClick={() => removeItem(prod.id)}><img src={remove} alt="remove"/></button>
                                </div>                       
                            </div>
                        )
                    })
                }                
            </div>
            <div className={clases.footerCart}>
                <p>Total de la compra: ${total}</p>
                <Link className={clases.btnSeguirCompra} to={'/'}>Seguir Comprando</Link>
                <Link className={clases.btnCheckout} to={"/Checkout"}>Checkout</Link>
                <button className={clases.deleteItem} onClick={() => clearCart()}><img src={vaciar} alt="delete"/></button>         
            </div>
        </div>
    )
}

export default Cart