import './Asociados.css';
import { useState, useEffect } from 'react';

export default function Asociados() {
    const empresas = [
        "/resources/asociados/inspec group.png",
        "/resources/asociados/end tech.png",
        "/resources/asociados/enod.png",
        "/resources/asociados/ndt solutions.png",
        "/resources/asociados/ndt systems.png"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % empresas.length);
                setIsTransitioning(false);
            }, 600);
        }, 5000);

        return () => clearInterval(interval);
    }, [empresas.length]);

    const getImageAtPosition = (position) => {
        const index = (currentIndex + position + empresas.length) % empresas.length;
        return empresas[index];
    };

    return <div className='asociados'>
        <div className='asociados-title-wrapper'>
            <div className='asociados-main-title-container'>
                <h2 className='asociados-main-title'>Empresas que confían en nosotros</h2>
            </div>
            <div className='asociados-image-wrapper'>
                <div className='asociados-image-lines-left-container'>
                    <div className="asociados-image-lines"></div>
                    <div className="asociados-image-lines"></div>
                    <div className="asociados-image-lines"></div>
                    <div className="asociados-image-lines"></div>
                </div>
                <div className='asociados-image-container'>
                    <img className='asociados-image' src="/resources/asociados/manos.png"/>
                </div>
                <div className='asociados-image-lines-right-container'>
                    <div className="asociados-image-lines"></div>
                    <div className="asociados-image-lines"></div>
                    <div className="asociados-image-lines"></div>
                    <div className="asociados-image-lines"></div>
                </div>
            </div>
        </div>
        <div className={`asociados-empresas-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
            <img 
                key={`extremo-izq-${currentIndex}`}
                src={getImageAtPosition(-2)} 
                className="asociado-empresa carousel-image" 
                id="empresa-extremo-izq"
            />
            <img 
                key={`izq-${currentIndex}`}
                src={getImageAtPosition(-1)} 
                className="asociado-empresa carousel-image" 
                id="empresa-izq"
            />
            <img 
                key={`medio-${currentIndex}`}
                src={getImageAtPosition(0)} 
                className="asociado-empresa carousel-image" 
                id='empresa-medio'
                alt="Empresa asociada principal"
            />
            <img 
                key={`der-${currentIndex}`}
                src={getImageAtPosition(1)} 
                className="asociado-empresa carousel-image" 
                id="empresa-der"
            />
            <img 
                key={`extremo-der-${currentIndex}`}
                src={getImageAtPosition(2)} 
                className="asociado-empresa carousel-image" 
                id="empresa-extremo-der"
            />
        </div>
    </div>
}