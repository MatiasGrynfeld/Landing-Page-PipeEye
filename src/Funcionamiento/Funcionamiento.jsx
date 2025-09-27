import './Funcionamiento.css';
import Pie from './Pie';

export default function Funcionamiento() {
    const scrollToIndicaciones = () => {
        const element = document.getElementById('indicaciones-wrapper');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    
    return <div id='funcionamiento' className='funcionamiento'>
        <img src="/resources/funcionamiento/Group 160.png" className='funcionamiento-imagen'/>
        
        <Pie 
            id='pie-1'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            Clickea
        </Pie>
        
        <Pie 
            id='pie-2'
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
            Arrastra
        </Pie>
        
        <Pie 
            id='pie-3'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
            Verifica
        </Pie>

        <Pie 
            id='pie-4'
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
            style={{ 
                display: "inline-block",
                overflow: "hidden", 
                whiteSpace: "nowrap" 
            }}
        >
            En tan solo 3 pasos
        </Pie>
        
        <button className='funcionamiento-button' onClick={scrollToIndicaciones}>
            <img src="/resources/funcionamiento/Group 86.png" className='funcionamiento-button-imagen'/>
            <img src="/resources/funcionamiento/Arrow.png" className='funcionamiento-button-arrow'/>
        </button>
    </div>
}