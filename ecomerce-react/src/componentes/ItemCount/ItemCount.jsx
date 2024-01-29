import clases from "./ItemCount.module.css"
import { useCount } from "../../Hooks/useCount"

const ItemCount = ({onAdd}) => {
    const {count, decrementar, incrementar} = useCount(1,0,10)

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