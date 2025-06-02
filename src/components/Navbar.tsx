import { useState } from 'react';
import mobileBurguerIcon from '../assets/images/burger-menu-svgrepo-com.svg';
import mobileCloseIcon from '../assets/images/close-menu-x-svgrepo-com.svg';


export default function Navbar() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <nav className="w-10/12 h-20 max-w-screen-2xl mx-auto bg-primary shadow-md px-4 md:px-6 rounded-sm flex justify-between items-center relative">
      <div>
        <img src="logo.png" alt="Logito"/>
      </div>
      <ul className='w-full md:w-auto hidden md:flex gap-8'>
        <li className='relative'>
          <a href="#" className='relative group text-center block py-4 md:py-2 hover:text-navLinkHover duration-100'>
            Propiedades
            <span className='underline-link-hover'></span>
          </a>
        </li>
        <li>
          <a href="#" className='relative group text-center block py-4 md:py-2 hover:text-navLinkHover duration-100'>
            Servicios
            <span className='underline-link-hover'></span>
          </a>
        </li>
        <li>
          <a href="#" className='relative group text-center block py-4 md:py-2 hover:text-navLinkHover duration-100'>
            Contacto
            <span className='underline-link-hover'></span>
          </a>
        </li>
      </ul>

      {/* HEXAGONO */}
      <div className='md:hidden' onClick={() => {setActive(!active)}}>        
        <div className="relative w-10 h-11 bg-hexagonShadowColor clip-hexagon">
        {/* SOMBRA HEXAGONO */}
          <div className="absolute w-9 h-10 bg-hexagonMainColor clip-hexagon top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* COLOR PRINCIPAL DEL HEXAGONO */}
            {
            active 
            ? <img src={mobileCloseIcon} className='close-open-menu' alt="close-menu"/> 
            : <img src={mobileBurguerIcon} alt="open menu" className="close-open-menu"/>  
            }
            <div className="w-9 h-10 bg-hexagonTopColor z-20 clip-top-hexagon">
              {/* PARTE SUPERIOR HEXAGONO */}
            </div>
          </div>
        </div>
      </div>

      {/* DROPDOWN MENU MOBILE */}
      <ul className=
        {
        active 
        ? 'active-menu' 
        : 'hidden'
        }>
        <li><a href="#" className='text-center block py-4 border-b-2 border-secondary hover:text-amber-400 duration-100'>Propiedades</a></li>
        <li><a href="#" className='text-center block py-4 border-b-2 border-secondary hover:text-amber-400 duration-100'>Servicios</a></li>
        <li><a href="#" className='text-center block py-4 border-b-2 border-secondary hover:text-amber-400 duration-100'>Contacto</a></li>
      </ul>

    </nav>

  )
}
