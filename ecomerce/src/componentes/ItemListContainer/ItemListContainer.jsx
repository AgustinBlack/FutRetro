import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"
import { getDocs, collection, query, where } from "firebase/firestore"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        const productosColeccion = categoriaId
        ? query(collection(db, 'productos'), where('categoria', '==', categoriaId)) 
        : collection(db, 'productos')

        getDocs(productosColeccion)
            .then(querySnapshot => {
                const productosAdaptados = querySnapshot.docs.map(doc => {
                    const campos = doc.data()
                    return {id: doc.id, ...campos}
                })
                setProductos(productosAdaptados)
            })

    }, [categoriaId])

    return (
        <>
            <ItemList productos={productos} children={'Bienvenidos'}/>
        </>
    ) 
}

export default ItemListContainer