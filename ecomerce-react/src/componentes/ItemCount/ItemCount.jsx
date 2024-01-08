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
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div>
                <div className={clases.div}>
                    <button onClick={decrementar} className={clases.divBtn}>-</button>
                    <h3 className={clases.divCount}>{count}</h3>
                    <button onClick={incrementar} className={clases.divBtn}>+</button>
                </div>
                <button className={clases.divBtnCart}>Agregar al carrito</button>
                <p className={clases.parrafo}>Contador solo usando useState</p>
            </div>
        </>
    )
}


export default ItemCount 