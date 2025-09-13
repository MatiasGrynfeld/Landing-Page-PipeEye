import './Footer.css'
import Link from './Link.jsx'

export default function Footer() {
    return <footer className='footer'>
        <div className='contact-container'>
            <section className='contact'>
                <div className='contact-title-container'>
                    <h2 className='contact-title'>Contactanos</h2>
                </div>
                <p className='contact-req'>Mail</p>
                <input type="email" className='contact-input-mail'/>
                <p className='contact-req'>Nombre</p>
                <div className='contact-bottom'>
                    <input type="text" className='contact-input-nombre'/>
                    <button className='contact-button'>Enviar</button>
                </div>
            </section>
        </div>
        <section className='redes'>
            <h2 className='redes-title'>Nuestras Redes</h2>
            <div className="redes-page-container">
                <Link img="/resources/footer/x.png" url="https://www.x.com/" />
                <Link img="/resources/footer/facebook.png" url="https://www.facebook.com/" />
                <Link img="/resources/footer/instagram.png" url="https://www.instagram.com/" />
            </div>
        </section>
    </footer>
}