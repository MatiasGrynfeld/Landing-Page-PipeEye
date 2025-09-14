import './Asociados.css';


export default function Asociados() {
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
            <img src="/public/resources/asociados/inspec group.png" className="asociado-empresa" id="empresa-extremo-izq" />
            <img src="/public/resources/asociados/end tech.png" className="asociado-empresa" id="empresa-izq" />
            <img src="/public/resources/asociados/enod.png" className="asociado-empresa" id='empresa-medio'/>
            <img src="/public/resources/asociados/ndt solutions.png" className="asociado-empresa" id="empresa-der" />
            <img src="/public/resources/asociados/ndt systems.png" className="asociado-empresa" id="empresa-extremo-der" />
        </div>
    </div>
}
