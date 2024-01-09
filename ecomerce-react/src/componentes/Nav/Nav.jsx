import clases from "./Nav.module.css"

const Nav = () => {
    return (
        <>
            <h1 className={clases.navLogo}>FutClothes</h1>
            <div className={clases.divBtnNav}>
                <button className={clases.btnNav}><a className={clases.btnNavA} href="#">Inicio</a></button> 
                <button className={clases.btnNav}><a className={clases.btnNavA} href="#">Remeras</a></button>
                <button className={clases.btnNav}><a className={clases.btnNavA} href="#">Pantalones</a></button>
                <button className={clases.btnNav}><a className={clases.btnNavA} href="#">Conjuntos</a></button>
                <button className={clases.btnNav}><a className={clases.btnNavA} href="#">Contacto</a></button>
            </div>  
        </>
    )
}

export default Nav