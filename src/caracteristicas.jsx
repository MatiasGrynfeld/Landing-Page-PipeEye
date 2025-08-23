import './css/caracteristicas.css';
import CaracteristicasParte from './caracteristicas_parte.jsx';

export default function Caracteristicas() {
    return <section className='caracteristicas-wrapper'>
        <div className='caracteristicas-content'>
            <CaracteristicasParte img="/resources/caracteristicas/caracteristica 1.svg" texto="Analisis con IA para radiografias." />
            <CaracteristicasParte img="/resources/caracteristicas/caracteristica 2.svg" texto="Entrenamiento de IA con casos reales." />
            <CaracteristicasParte img="/resources/caracteristicas/caracteristica 3.svg" texto="Precision aproximada del 75%." />
            <CaracteristicasParte img="/resources/caracteristicas/caracteristica 4.svg" texto="Mejoras en la IA todos los dias." />
        </div>
    </section>
}