import clases from "./CheckoutForm.module.css"
import { useState } from "react"

const ChekoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');

    const handleConfirm = (e) => {
        e.preventDefault();

        const userData = {
            nombre,
            email,
            numero,
        };

        onConfirm(userData);
    };

    return (
        <>
            <div className={clases.divForm}>
                <form className={clases.form} onSubmit={handleConfirm}>
                    <label className={clases.label}>
                        Nombre
                        <input className={clases.input} placeholder="Ingrese su Nombre Completo" type="text" value={nombre} onChange={({ target }) => setNombre(target.value)} />
                    </label>
                    <label className={clases.label}>
                        Email
                        <input className={clases.input} placeholder="Ingrese su Email" type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
                    </label>
                    <label className={clases.label}>
                        Numero
                        <input className={clases.input} placeholder="Ingrese su Numero de Telefono" type="text" value={numero} onChange={({ target }) => setNumero(target.value)} />
                    </label>
                    <div className={clases.label}>
                        <button type="submit" className={clases.btn}>Crear Orden</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ChekoutForm