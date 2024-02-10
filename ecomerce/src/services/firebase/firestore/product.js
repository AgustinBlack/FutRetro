import { db } from "../firebaseConfig"
import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore"

export const getProducts = (categoriaId) => {
    const productosColeccion = categoriaId
    ? query(collection(db, 'productos'), where('categoria', '==', categoriaId)) 
    : collection(db, 'productos')

    return getDocs(productosColeccion)
        .then(querySnapshot => {
            const productosAdaptados = querySnapshot.docs.map(doc => {
                const campos = doc.data()
                return {id: doc.id, ...campos}
            })
            return productosAdaptados
        })
}

export const getProductById = (productoId) => {
    const productoDoc = doc(db, 'productos', productoId)

    return getDoc(productoDoc)
        .then(queryDocumentSnapshot => {
            const campos = queryDocumentSnapshot.data()
            const productoAdaptado = { id: queryDocumentSnapshot.id, ...campos}
            return productoAdaptado
        })
}