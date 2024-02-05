import clases from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useCart } from '../../context/CartContent'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({id ,nombre, talles, precio, categoria, img, stock}) => {

    const[quantity, setQuantity] = useState(0)

    const[talle, setTalle] = useState("")
 
    const { addItem } = useCart()

    const handleOnAdd = (quantity) => {
        const inputTalle = talle

        if (inputTalle === "") {
            sweetAlert()
        } else {
            const objProductToAdd = {
                id, nombre, precio, quantity, talle
            }
            addItem(objProductToAdd)
            setQuantity(quantity) 
        }
    }

    const handleChange = (e) => {
        setTalle(e.target.value)
    }

    const sweetAlert = () => {
        Swal.fire({
            text: "No se puede agregar el producto al carrito sin haber puesto un talle!",
            icon: "warning" 
        })
    } 

    return (
        <div className={clases.divItemDetail}>
            <img className={clases.divItemDetailImg} src={img} alt=""/>                
            <div className={clases.divItemDetailInfo}>
                <h2>{nombre}</h2>
                <h4>{categoria}</h4>
                <h5>{talles}</h5>
                <input type="text" placeholder='Ingresa el talle' value={talle} onChange={handleChange}/>
                <h5>Stock: {stock}</h5>
                <h4 className={clases.divItemDetailPrecio}>${precio}</h4>
                {
                    quantity === 0 ? (
                        <ItemCount stock={stock} onAdd={handleOnAdd}/>  
                    ) : (
                        <Link to={'/Cart'}>Finalizar compra</Link>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail