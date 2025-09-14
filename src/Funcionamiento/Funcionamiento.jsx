import './Funcionamiento.css';
import Pie from './Pie';

export default function Funcionamiento() {
    return <div className='funcionamiento'>
        <img src="/resources/funcionamiento/Group 160.png" className='funcionamiento-imagen'/>
        <Pie id='pie-1'>Clickea</Pie>
        <Pie id='pie-2'>Arrastra</Pie>
        <Pie id='pie-3'>Verifica</Pie>
        <Pie id='pie-4'>En tan solo 3 pasos</Pie>
        <button className='funcionamiento-button'>
            <img src="/public/resources/funcionamiento/Group 86.png" className='funcionamiento-button-imagen'/>
        </button>
    </div>
}