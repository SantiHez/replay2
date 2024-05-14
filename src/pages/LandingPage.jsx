import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

export const LandingPage = () => {

    const [Languague,setLanguague] = useState('es');

    const handleLanguague = (event) => {
        setLanguague(event.target.value);
    };

    return (
        <>
            <header>
                
                {/* Pendiente el logo*/}
                <Link to='/'><img alt="logo" /></Link>

                <select value={Languague} onChange={handleLanguague}>
                    <option value="es" >Español</option>
                    <option value="en" >English</option>
                </select>
                {Languague === 'es' ? <Link to='/login'><button>Iniciar Sesión</button></Link> : <Link to='/login'><button>Sign In</button></Link>}

            </header>

            <main>

                {Languague === 'es' ? <h2>Películas y series ilimitadas y mucho más</h2> : <h2>Unlimited movies, TV shows, and more</h2>}
                
                {Languague === 'es' ? <p>Disfruta donde quieras. Cancela cuando quieras.</p> : <p>Watch anywhere. Cancel anytime.</p>}

                {Languague === 'es' ? <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p> : <p>Ready to watch? Enter your email to create or restart your membership.</p> }

                <form>
                    {Languague === 'es' ? <input type="email" placeholder="Email" /> : <input type="email" placeholder="Email address" />}
                    
                    {Languague === 'es' ? <button>Comenzar</button> : <button>Get Started</button>}
                </form>
            </main>

            <footer>

            </footer>

        </>
    )
}

