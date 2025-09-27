import './Caracteristicas.css';
import CaracteristicasParte from './CaracteristicasParte.jsx';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Caracteristicas() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    const scrollToFuncionamiento = () => {
        const element = document.getElementById('funcionamiento');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
        <div id='caracteristicas-anchor' style={{ height: '10vh' }}></div>
        <section className='caracteristicas-wrapper' ref={ref}>
            <div className='caracteristicas-container'>
                <h2 className='caracteristicas-title'>
                    <motion.span 
                        style={{ 
                            display: "inline-block",
                            overflow: "hidden", 
                            whiteSpace: "nowrap" 
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "auto" } : { width: 0 }}
                        transition={{ 
                            duration: 1, 
                            ease: "easeInOut"
                        }}
                    >
                        Datos y Caracteristicas
                    </motion.span>
                </h2>
                <div className='caracteristicas-content'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                    >
                        <CaracteristicasParte img="/resources/caracteristicas/caracteristica 1.svg">
                            Analisis con IA para radiografias.
                        </CaracteristicasParte>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.0 }}
                    >
                        <CaracteristicasParte img="/resources/caracteristicas/caracteristica 2.svg">
                            Entrenamiento de IA con casos reales.
                        </CaracteristicasParte>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                    >
                        <CaracteristicasParte img="/resources/caracteristicas/caracteristica 3.svg">
                            Precision aproximada del 75%.
                        </CaracteristicasParte>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
                    >
                        <CaracteristicasParte img="/resources/caracteristicas/caracteristica 4.svg">
                            Mejoras en la IA todos los dias.
                        </CaracteristicasParte>
                    </motion.div>
                    <button className='caracteristicas-button' onClick={scrollToFuncionamiento}>¿Como usar?</button>
                </div>
            </div>
        </section>
        </>
    );
}