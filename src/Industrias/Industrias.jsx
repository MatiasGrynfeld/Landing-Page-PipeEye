import './Industrias.css'
import IndustriasCard from './IndustriasCard.jsx'

export default function Industrias() {
    return <section className="industrias-wrapper">
        <div className='industrias-title-container'>
            <h2 className='industrias-title'>Industrias beneficiadas</h2>
        </div>
        <div className="industrias-container">
            <IndustriasCard img="/resources/industrias/oil an gas 1.png" type="Sector energético, petrolífero y de gas natural">
                Detectar fisuras en tuberías de transporte de gas, petróleo y derivados, reduciendo riesgos ambientales y costos de mantenimiento.
            </IndustriasCard>
            <IndustriasCard img="/resources/industrias/end 1.png" type="Empresas de END (Ensayos no destructivos)">
                Optimizar tiempos de inspección radiográfica, mejorar la trazabilidad y asegurar mayor precisión en la detección de fallas.
            </IndustriasCard>
            <IndustriasCard img="/resources/industrias/Industria Manufacturera y Minería 1.png" type="Industria Manufacturera y Minería">
                Control de calidad en piezas críticas y ductos, previniendo fallas en procesos industriales y garantizando seguridad operativa.
            </IndustriasCard>
        </div>
    </section>
}