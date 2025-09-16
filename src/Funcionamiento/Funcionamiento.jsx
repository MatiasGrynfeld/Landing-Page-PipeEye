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
        <Pie id='pie-1'>Clickea</Pie>
        <Pie id='pie-2'>Arrastra</Pie>
        <Pie id='pie-3'>Verifica</Pie>
        <Pie id='pie-4'>En tan solo 3 pasos</Pie>
        <button className='funcionamiento-button' onClick={scrollToIndicaciones}>
            <img src="/resources/funcionamiento/Group 86.png" className='funcionamiento-button-imagen'/>
        </button>
    </div>
}