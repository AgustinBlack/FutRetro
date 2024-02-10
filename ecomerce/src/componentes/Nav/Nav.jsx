import clases from "./Nav.module.css"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>
            <Link to='/' className={clases.divLink}><h1 className={clases.navLogo}>FutClothes</h1></Link>
            <div className={clases.divBtnNav}>
                <Link to='/categoria/Remera' className={clases.btnNav}>Remeras</Link>
                <Link to='/categoria/Pantalon' className={clases.btnNav}>Pantalones</Link>
                <Link to='/categoria/Conjunto' className={clases.btnNav}>Conjunto</Link>
            </div>  
        </>
    )
}

export default Nav