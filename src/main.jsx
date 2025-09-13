import './css/main.css';
import Caracteristicas from './caracteristicas/caracteristicas.jsx';
import Industrias from './industrias/industrias.jsx';
import Indicaciones from './indicaciones/indicaciones.jsx';
import Footer from './footer/footer.jsx';

export default function Main() {
    return <body className='main-body'>
        <div className='aa'></div>
        <Caracteristicas />
        <div className='bb'></div>
        <Indicaciones />
        <Industrias />
        <Footer />
    </body>;
}