import clases from "./ItemCount.module.css"
import { useState } from "react"

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const incrementar = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    const decrementar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className={clases.divPadre}>
                <div className={clases.div}>
                    <button onClick={decrementar} className={clases.divBtn}>-</button>
                    <h3 className={clases.divCount}>{count}</h3>
                    <button onClick={incrementar} className={clases.divBtn}>+</button>
                </div>
                <button className={clases.divBtnCart}>Agregar al carrito</button>
            </div>
        </>
    )
}


export default ItemCount 