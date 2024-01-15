import { useState, useEffect } from 'react'
import { getProductById } from "../AsyncMock/asyncMock"
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import clases from '../ItemDetail/ItemDetail.module.css'

const ItemDetailContainer = () => {
    const [producto, setProduct] = useState([])

    const {productoId} = useParams([])

    useEffect(() => {
        getProductById(productoId)
            .then(response => {
                setProduct(response)
            })
    }, [productoId])

    if(!producto) {
        return <h1>El producto no existe</h1>
    }

    return (
        <div className={clases.divItemDetailPadre}>
            <ItemDetail {...producto} />
        </div>
    )
        
}

export default ItemDetailContainer