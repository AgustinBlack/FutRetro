import clases from "./NavBar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className={clases.nav}>
            <h1 className={clases.navLogo}>FutRetro</h1>
            <div className={clases.divBtnNav}>
                <button className={clases.btnNav}><a className={clases.btnNavA} href="#">Inicio</a></button> 
                <button className={clases.btnNav}><a className={clases.btnNavA} href="#">Remeras</a></button>
                <button className={clases.btnNav}><a className={clases.btnNavA} href="#">Pantalones</a></button>
                <button className={clases.btnNav}><a className={clases.btnNavA} href="#">Conjuntos</a></button>
                <button className={clases.btnNav}><a className={clases.btnNavA} href="#">Contacto</a></button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar 