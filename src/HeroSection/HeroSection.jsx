import './HeroSection.css';


export default function HeroSection() {
    return <div className='herosection'>
        <div className='herosection-description-container'>
            <p className='herosection-description'>IA que analiza automáticamente radiografías de tuberías para detectar, segmentar y clasificar posibles defectos.</p>
        </div>
        <div className='herosection-bottom-wrapper'>
            <div className='herosection-bottom-left'>
                <img src="/resources/herosection/buttonpng.png" className='herosection-bottom-left-image'/>
                <button className='herosection-bottom-left-button'>
                    Conocer más
                </button>
            </div>
            <div className='herosection-bottom-right'>
                <p className='herosection-bottom-right-text'>Analizá soldaduras de ductos con la IA a tu lado.</p>
            </div>
        </div>
    </div>
}

