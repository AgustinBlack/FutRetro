import { useState } from "react"
import { useCart } from "../../context/CartContent"
import { db } from '../../services/firebase/firebaseConfig' 
import { collection, getDocs, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore"
import ChekoutForm from "../CheckoutForm/CheckoutForm"

const Checkout = () => {
    const { cart, total, clearCart } = useCart()
    const [orderId, setOrderId] = useState(null)

    const createOrder = async ({nombre, email, numero}) => {
        try {
            const objOrder = {
                comprador: {
                    nombre,
                    email,
                    numero,
                },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())  
            }       
        

            const batch = writeBatch(db)
            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productosColeccion = query(collection(db, 'productos'), where(documentId(), 'in', ids))

            const querySnapshot = await getDocs(productosColeccion)
            const { docs } = querySnapshot

            docs.forEach(doc => {
                const campos = doc.data()
                const stockDb = campos.stock

                const prodAgregadoCarrito = cart.find(prod => prod.id === doc.id)
                const prodQuantity = prodAgregadoCarrito.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...campos })
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()

                const orderCollection = collection(db, 'compras')
                const { id } = await addDoc(orderCollection, objOrder)

                setOrderId(id)

                clearCart()
            } else {
                window.alert("No hay stock disponible")
            }
            console.log(objOrder) 
        } catch (error) {
            console.error("Error al crear la orden:", error);
        }
        
    }

    if (orderId) {
        return <h1>Este es el id de su compra {orderId}</h1>
    }

    return(
        <>
            <h1>CHECKOUT</h1>
            <ChekoutForm onConfirm={createOrder}/>
        </>

    )
    
}

export default Checkout