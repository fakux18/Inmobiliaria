import { useState } from 'react';
import mobileBurguerIcon from '../assets/images/burger-menu-svgrepo-com.svg';
import mobileCloseIcon from '../assets/images/close-menu-x-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';
import navLogo from '../assets/images/navbar-logo/navbarLogo.png'

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const palAdmin = useNavigate()

  const handleClick = () => {
    const newCount = count + 1
    if (newCount === 5) {
      palAdmin('/admin')
      setCount(0)
    } else {
      setCount(newCount)
  }
}

  return (
    <nav className="center-all h-20 opacity-90 bg-primary shadow-2xl z-50 shadow-[#2d8250] px-4 md:px-6 rounded-md flex justify-between items-center relative">
      <div onClick={handleClick} className='w-32 h-16 flex justify-center items-center'>
        <img src={navLogo} alt="Logito"/>
      </div>
      <ul className='w-full md:w-auto hidden md:flex gap-3 lg:gap-8'>
        <li className='relative'>
          <a href="#" className='relative group text-center block py-4 md:py-2 hover:text-navLinkHover duration-100'>
            Inicio
            <span className='underline-link-hover'></span>
          </a>
        </li>
        <li className='relative'>
          <a href="#" className='relative group text-center block py-4 md:py-2 hover:text-navLinkHover duration-100'>
            Conocenos
            <span className='underline-link-hover'></span>
          </a>
        </li>
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
        <li><a href="#" className='text-center block py-4 border-b-2 border-secondary hover:text-amber-400 duration-100'>Inicio</a></li>
        <li><a href="#" className='text-center block py-4 border-b-2 border-secondary hover:text-amber-400 duration-100'>Conocenos</a></li>
        <li><a href="#" className='text-center block py-4 border-b-2 border-secondary hover:text-amber-400 duration-100'>Propiedades</a></li>
        <li><a href="#" className='text-center block py-4 border-b-2 border-secondary hover:text-amber-400 duration-100'>Servicios</a></li>
        <li><a href="#" className='text-center block py-4 border-b-2 border-secondary hover:text-amber-400 duration-100'>Contacto</a></li>
      </ul>

    </nav>

  )
}
