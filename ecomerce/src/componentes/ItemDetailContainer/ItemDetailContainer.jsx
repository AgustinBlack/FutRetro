import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { getDoc, doc } from "firebase/firestore"
import ItemDetail from '../ItemDetail/ItemDetail'
import clases from '../ItemDetail/ItemDetail.module.css'

const ItemDetailContainer = () => {
    const [producto, setProduct] = useState([])

    const {productoId} = useParams([])

    useEffect(() => {
        const productoDoc = doc(db, 'productos', productoId)

        getDoc(productoDoc)
            .then(queryDocumentSnapshot => {
                const campos = queryDocumentSnapshot.data()
                const productoAdaptado = { id: queryDocumentSnapshot.id, ...campos}
                setProduct(productoAdaptado)
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