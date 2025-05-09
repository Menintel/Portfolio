import React, { useState, useEffect, useRef } from 'react'
import {motion} from "motion/react"

function Navigation() {
    const handleClick = (e, targetId) => {e.preventDefault(); 
        const element = document.getElementById(targetId);
        if (element) {element.scrollIntoView({behavior: 'smooth', block:'start'});}
    };
    return <ul className='nav-ul'>
        <li className='nav-li'><a href="#home" className='nav-link' onClick={(e) => handleClick(e, 'home')}>Home</a></li>
        <li className='nav-li'><a href="#about" className='nav-link' onClick={(e) => handleClick(e, 'about')} >About</a></li>
        <li className='nav-li'><a href="#projects" className='nav-link' onClick={(e) => handleClick(e, 'projects')} >projects</a></li>
        <li className='nav-li'><a href="#contact" className='nav-link' onClick={(e) => handleClick(e, 'contact')} >contact</a></li>
    </ul>
}

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        if (isOpen) { const handleClickOutside = (event) => {
                if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                    setIsOpen(false);}};
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen]);

  return (
    <div className={`fixed inset-x-0 z-20 w-full transition-colors duration-300 ${isOpen ? 'bg-black/60' : 'bg-transparent'}`}>
        <div className='mx-auto c-space max-w-7xl'>
            <div className='flex items-center justify-between py-2 sm:py-0'>
                <a href="/" className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'> 
                    MENINTEL 
                </a>
                <button onClick={()=> setIsOpen(!isOpen)} 
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
                    <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} className='w-6 h-6' alt='menu-icon' />
                </button>
                <nav className='hidden sm:flex'><Navigation/></nav>
            </div>
        </div>
        {isOpen && (<motion.div className='block overflow-hidden text-center sm:hidden'
            ref={mobileMenuRef}
            initial={{opacity:0, x: -10}} animate={{ opacity:1, x:0}}
            style={{maxHeight:"100vh"}} transition={{ duration: 1}} >
            <nav className='pb-5'> <Navigation/> </nav>
        </motion.div>)}
    </div>
  )
}

export default Navbar