import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import clases from '../ItemDetail/ItemDetail.module.css'
import { getProductById } from '../../services/firebase/firestore/product'
import { useAsync } from '../../hooks/useAsync'

const ItemDetailContainer = () => {
    // const [producto, setProduct] = useState([])

    const {productoId} = useParams([])

    const asyncFunction = () => getProductById(productoId)

    const { data: producto } = useAsync(asyncFunction, [productoId])

    // useEffect(() => {
    //     getProductById(productoId)
    //         .then(productos => {
    //             setProduct(productos)
    //         })
    // }, [productoId])

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