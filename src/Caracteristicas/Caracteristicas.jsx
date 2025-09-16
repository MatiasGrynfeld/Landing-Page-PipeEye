import './Caracteristicas.css';
import CaracteristicasParte from './CaracteristicasParte.jsx';

export default function Caracteristicas() {
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
        <section className='caracteristicas-wrapper'>
            <div className='caracteristicas-container'>
                <h2 id='caracteristicas-title' className='caracteristicas-title'>Datos y Caracteristicas</h2>
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
                    <button className='caracteristicas-button' onClick={scrollToFuncionamiento}>¿Como usar?</button>
                </div>
            </div>
        </section>
    );
}