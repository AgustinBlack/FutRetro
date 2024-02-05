import clases from "./ItemCount.module.css"
import { useState } from "react"

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial)
    
    const decrementar = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }

    const incrementar = () => {
        if(count < stock)
            setCount(prev => prev + 1)
        }

    return (
        <div className={clases.divPadre}>
            <div className={clases.div}>
                <button onClick={decrementar} className={clases.divBtn}>-</button>
                <h3 className={clases.divCount}>{count}</h3>
                <button onClick={incrementar} className={clases.divBtn}>+</button>
            </div>
            <button className={clases.divBtnCart} onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount