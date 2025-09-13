import './css/main.css';

import Navbar from './Navbar/Navbar.jsx';
import HeroSection from './HeroSection/HeroSection.jsx';
import Caracteristicas from './Caracteristicas/Caracteristicas.jsx';
import Funcionamiento from './Funcionamiento/Funcionamiento.jsx';
import Indicaciones from './Indicaciones/Indicaciones.jsx';
import Industrias from './Industrias/Industrias.jsx';
import Asociados from './Asociados/Asociados.jsx';
import Footer from './Footer/Footer.jsx';

export default function Main() {
    return <body className='main-body'>
        <Navbar />
        <HeroSection />
        <Caracteristicas />
        <Funcionamiento />
        <Indicaciones />
        <Industrias />
        <Asociados />
        <Footer />
    </body>;
}