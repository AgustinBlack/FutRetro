import clases from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({nombre, talles, precio, categoria, img, stock, descripcion}) => {
    return (
        <div className={clases.divItemDetail}>
            <img className={clases.divItemDetailImg} src={img} alt=""/>                
            <div className={clases.divItemDetailInfo}>
                <h2>{nombre}</h2>
                <h4>{categoria}</h4>
                <h5>{talles}</h5>
                <h5>Stock: {stock}</h5>
                <p className={clases.divItemDetailDesc}>{descripcion}</p>
                <h4 className={clases.divItemDetailPrecio}>${precio}</h4>
                <ItemCount/>
            </div>
        </div>
    )
}

export default ItemDetail