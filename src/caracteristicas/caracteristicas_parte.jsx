export default function CaracteristicasParte({ img, children: texto }) {
    return (
        <div className="caracteristicas-parte">
            <img className="caracteristicas-parte-imagen" src={img} />
            <div className="caracteristicas-parte-texto-wrapper">
                <p className="caracteristicas-parte-texto">{texto}</p>
            </div>
        </div>
    );
}