import './HeroSection.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    const scrollToCaracteristicas = () => {
        const element = document.getElementById('caracteristicas-anchor');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return <div className='herosection' ref={ref}>
        <div className='herosection-description-container'>
            <motion.p 
                className='herosection-description'
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                IA que analiza automáticamente radiografías de tuberías para detectar, segmentar y clasificar posibles defectos.
            </motion.p>
        </div>
        <div className='herosection-bottom-wrapper'>
            <motion.div 
                className='herosection-bottom-left'
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
                <motion.img 
                    src="/resources/herosection/buttonpng.png" 
                    className='herosection-bottom-left-image'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <button className='herosection-bottom-left-button' onClick={scrollToCaracteristicas}>
                    <span className='button-text'>Conocer más</span>
                    <img src="/resources/herosection/Arrow.png" className='button-arrow'/>
                </button>
            </motion.div>
            <div className='herosection-bottom-right'>
                <motion.p 
                    className='herosection-bottom-right-text'
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Analizá soldaduras de ductos con la IA a tu lado.
                </motion.p>
            </div>
        </div>
    </div>
}