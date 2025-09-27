import { motion } from 'framer-motion';

export default function Pie({children: texto, id, initial, animate, transition, style}) {
    return (
        <motion.div 
            className='pie' 
            id={id}
            initial={initial}
            animate={animate}
            transition={transition}
            style={style}
        >
            <p className='pie-texto'>{texto}</p>
        </motion.div>
    );
}