import './Industrias.css'
import IndustriasCard from './IndustriasCard.jsx'
import { motion } from 'framer-motion'

export default function Industrias() {
    return <section className="industrias-wrapper">
        <div className='industrias-title-container'>
            <motion.h2 
                className='industrias-title'
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 1, 
                    ease: "easeOut"
                }}
            >
                Industrias beneficiadas
            </motion.h2>
        </div>
        <div className="industrias-container">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                    duration: 1, 
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                <IndustriasCard img="/resources/industrias/oil an gas 1.png" type="Sector energético, petrolífero y de gas natural">
                    Detectar fisuras en tuberías de transporte de gas, petróleo y derivados, reduciendo riesgos ambientales y costos de mantenimiento.
                </IndustriasCard>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 1, 
                    ease: "easeOut",
                    delay: 0.4
                }}
            >
                <IndustriasCard img="/resources/industrias/end 1.png" type="Empresas de END (Ensayos no destructivos)">
                    Optimizar tiempos de inspección radiográfica, mejorar la trazabilidad y asegurar mayor precisión en la detección de fallas.
                </IndustriasCard>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                    duration: 1, 
                    ease: "easeOut",
                    delay: 0.6
                }}
            >
                <IndustriasCard img="/resources/industrias/Industria Manufacturera y Minería 1.png" type="Industria Manufacturera y Minería">
                    Control de calidad en piezas críticas y ductos, previniendo fallas en procesos industriales y garantizando seguridad operativa.
                </IndustriasCard>
            </motion.div>
        </div>
    </section>
}