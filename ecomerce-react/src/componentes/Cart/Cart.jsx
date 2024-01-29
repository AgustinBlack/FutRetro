import clases from '../CartWidget/assets/Cart.png'

const Cart = ({img, nombre, precio, talle}) => {
    return (
        <div>
            <img src={img}/>
            <p>{nombre} </p>
            <p>{precio} </p>
            <p>{talle} </p>
        </div>
    )
}

export default Cart