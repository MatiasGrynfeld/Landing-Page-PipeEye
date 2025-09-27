import './Footer.css'
import Link from './Link.jsx'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    return <footer className='footer' ref={ref}>
        <div className='contact-container'>
            <section className='contact'>
                <div className='contact-title-container'>
                    <motion.h2 
                        className='contact-title'
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Contactanos
                    </motion.h2>
                </div>
                <motion.p 
                    className='contact-req'
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Mail
                </motion.p>
                <motion.input 
                    type="email" 
                    className='contact-input-mail'
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                />
                <motion.p 
                    className='contact-req'
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    Nombre
                </motion.p>
                <div className='contact-bottom'>
                    <motion.input 
                        type="text" 
                        className='contact-input-nombre'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    />
                    <motion.button 
                        className='contact-button'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Enviar
                    </motion.button>
                </div>
            </section>
        </div>
        <section className='redes'>
            <motion.h2 
                className='redes-title'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
                Nuestras Redes
            </motion.h2>
            <motion.div 
                className="redes-page-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
                <Link img="/resources/footer/x.png" url="https://www.x.com/" />
                <Link img="/resources/footer/facebook.png" url="https://www.facebook.com/" />
                <Link img="/resources/footer/instagram.png" url="https://www.instagram.com/" />
            </motion.div>
        </section>
    </footer>
}