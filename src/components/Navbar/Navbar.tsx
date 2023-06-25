import './Navbar.scss';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface toggleDarkMode {
    onToggleMode: () => void;
}


function smoothScroll(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
  
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(`${targetId}`);

    if (targetElement) {
        const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;
    
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth',
        });
    };
};


const Navbar: React.FC<toggleDarkMode> = ({ onToggleMode }) => {

    const navRef = useRef<HTMLUListElement>(null);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        smoothScroll(e);
        showNavbar();
    };
      
    function showNavbar() {
        navRef.current?.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <nav ref={ navRef }>
                <ul className='navbar-links' >
                    <li>
                        <a href="#about" onClick={handleLinkClick}>Acerca de mi</a>
                    </li>

                    <li>
                        <a href="#skillContainer" onClick={handleLinkClick}>Habilidades</a>
                    </li>

                    <li>
                        <a href="#projectContainer" onClick={handleLinkClick}>Proyectos</a>
                    </li>

                    <li>
                        <a href="#contact" onClick={handleLinkClick}>Contacto</a>
                    </li>

                    <li className='nav-btn-dark'>
                        <button className='navbar--button__darkMode' onClick={onToggleMode}>
                            <Brightness4Icon/>
                        </button>
                    </li>

                    <li>
                        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                            <FaTimes/>
                        </button>
                    </li>
                </ul>
            </nav>

            <button className='nav-btn navbar--button__darkMode' onClick={onToggleMode}>
                <Brightness4Icon/>
            </button>

            <button className='nav-btn'>
                <FaBars onClick={showNavbar}/>
            </button>
        </header>
    )
};

export default Navbar;
