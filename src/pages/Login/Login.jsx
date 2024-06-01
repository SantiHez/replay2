/* import { useState } from 'react'; */
import { Link } from 'react-router-dom';
/* import '../styles/Login.css'; */

export const Login = () => {

    /* const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); */
    
    return (
        <>
            <Link to='/'><img alt='Loguito'/></Link>

            <section>
                <h2>Login</h2>
                
                <form>
                <legend>Formulario</legend>

                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <br />

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" required />
                    <br />
                    <button type="submit">Iniciar sesión</button>
                    <br />
                    <button type="button">Registrarse</button>
                </fieldset>
                </form>
            </section>
        </>
    )
}