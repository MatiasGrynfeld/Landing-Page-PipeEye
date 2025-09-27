import './Asociados.css';
import Asociado from './Asociado.jsx';
import { motion } from 'framer-motion';

export default function Asociados() {
    const images_files = [
        "/resources/asociados/inspec group.png",
        "/resources/asociados/ndt solutions.png",
        "/resources/asociados/enod.png",
        "/resources/asociados/ndt systems.png",
        "/resources/asociados/end tech.png"
    ];

    const images = [...images_files, ...images_files];

    return <div className='asociados'>
        <div className='asociados-title-wrapper'>
            <div className='asociados-main-title-container'>
                <motion.h2 
                    className='asociados-main-title'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1, 
                        ease: "easeOut"
                    }}
                >
                    Empresas que confían en nosotros
                </motion.h2>
            </div>
            <div className='asociados-image-wrapper'>
                <motion.div 
                    className='asociados-image-lines-left-container'
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                        duration: 1, 
                        ease: "easeOut",
                        delay: 0.3
                    }}
                >
                    <div className="asociados-image-lines"></div>
                    <div className="asociados-image-lines"></div>
                    <div className="asociados-image-lines"></div>
                    <div className="asociados-image-lines"></div>
                </motion.div>
                <div className='asociados-image-container'>
                    <motion.img 
                        className='asociados-image' 
                        src="/resources/asociados/manos.png"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 1, 
                            ease: "easeOut",
                            delay: 0.5
                        }}
                    />
                </div>
                <motion.div 
                    className='asociados-image-lines-right-container'
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                        duration: 1, 
                        ease: "easeOut",
                        delay: 0.3
                    }}
                >
                    <div className="asociados-image-lines"></div>
                    <div className="asociados-image-lines"></div>
                    <div className="asociados-image-lines"></div>
                    <div className="asociados-image-lines"></div>
                </motion.div>
            </div>
        </div>
        <div className='asociados-empresas-wrapper'>
            <div className='asociados-empresas-container'>
                {
                    images.map((img, index) => (
                        <Asociado key={index} img={img} />
                    ))
                }
            </div>
        </div>
    </div>
}