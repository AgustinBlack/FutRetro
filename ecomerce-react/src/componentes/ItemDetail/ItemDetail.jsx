import clases from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useCart } from '../../context/CartContent'

const ItemDetail = ({id ,nombre, talles, precio, categoria, img, stock}) => {

    const[quantity, setQuantity] = useState(0)
 
    const { addItem } = useCart()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, nombre, precio, quantity
        }
        addItem(objProductToAdd)
        setQuantity(quantity)
    }

    return (
        <div className={clases.divItemDetail}>
            <img className={clases.divItemDetailImg} src={img} alt=""/>                
            <div className={clases.divItemDetailInfo}>
                <h2>{nombre}</h2>
                <h4>{categoria}</h4>
                <h5>{talles}</h5>
                <h5>Stock: {stock}</h5>
                <h4 className={clases.divItemDetailPrecio}>${precio}</h4>
                <ItemCount stock={stock} onAdd={handleOnAdd} />
            </div>
        </div>
    )
}

export default ItemDetail