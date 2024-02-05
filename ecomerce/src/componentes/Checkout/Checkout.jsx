// import { useCart } from "../../context/CartContent"
// import { db } from "../../service/firebase/firebaseConfig"
// import { collection, getDocs, query, where, documentId } from "firebase/firestore"
// import OrderForm from  '../OrderForm/OrderForm'

const Checkout = () => {
//     const { cart, total } = useCart()

//     const createOrder = async (userData) = {
//         const objOrder = {
//             buyer: {
//                 name: 'Agustin Black',
//                 email: 'agustinblack04@gmail.com',
//                 numero: '8392864832'
//             }, userData,
//             items: cart,
//             total
//         }

//         const ids = cart.map(prod => prod.id)

//         const productosColeccion = query(collection(db, 'productos'), where(documentId(), 'in', ids))

//         const querySnapshot = await getDocs(productosColeccion)

//         console.log(querySnapshot)
//     }

     return(
         <>
             <h1>CHECKOUT</h1>
//             {/* <Orderform onCreate={createOrder} ></Orderform> */}
{/* //             <button onClick={createOrder}>Generar orden</button> */}
         </>

     )
}

export default Checkout