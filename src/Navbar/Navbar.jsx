import './Navbar.css';

export default function Navbar() {
    return <nav className='navbar'>
        <div className='navbar-logo-container'>
            <img src="/resources/navbar/PipeEye.png" className='navbar-logo' />
        </div>
        <div className='navbar-button-container'>
            <button className='navbar-button'>Ya soy cliente</button>
        </div>
    </nav>
}