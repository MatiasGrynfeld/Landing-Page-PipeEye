import './Asociados.css';
import Asociado from './Asociado.jsx';

export default function Asociados() {
    const images_files = [
        "/resources/asociados/inspec group.png",
        "/resources/asociados/end tech.png",
        "/resources/asociados/enod.png",
        "/resources/asociados/ndt solutions.png",
        "/resources/asociados/ndt systems.png"
    ];

    const images = [...images_files, ...images_files];

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
        <div className='asociados-empresas-wrapper'>
            <div className='asociados-empresas-container'>
                {
                    images.map((img, index) => (
                        <Asociado key={index} img={img} />
                    ))
                }
            </div>
        </div>
    </div>
}