import './css/caracteristicas.css';
import CaracteristicasParte from './caracteristicas_parte.jsx';

export default function Caracteristicas() {
    return (
        <section className='caracteristicas-wrapper'>
            <div className='caracteristicas-container'>
                <h2 className='caracteristicas-title'>Datos y Caracteristicas</h2>
                <div className='caracteristicas-content'>
                    <CaracteristicasParte img="/resources/caracteristicas/caracteristica 1.svg">
                        Analisis con IA para radiografias.
                    </CaracteristicasParte>
                    <CaracteristicasParte img="/resources/caracteristicas/caracteristica 2.svg">
                        Entrenamiento de IA con casos reales.
                    </CaracteristicasParte>
                    <CaracteristicasParte img="/resources/caracteristicas/caracteristica 3.svg">
                        Precision aproximada del 75%.
                    </CaracteristicasParte>
                    <CaracteristicasParte img="/resources/caracteristicas/caracteristica 4.svg">
                        Mejoras en la IA todos los dias.
                    </CaracteristicasParte>
                    <button className='caracteristicas-button'>¿Como usar?</button>
                </div>
            </div>
        </section>
    );
}