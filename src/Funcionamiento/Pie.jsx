export default function Pie({children: texto, id}) {
    return <div className='pie' id={id}>
        <p className='pie-texto'>{texto}</p>
    </div>
}
