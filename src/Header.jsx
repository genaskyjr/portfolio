import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useEffect } from "react";

function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [scrollY, setScrollY] = useState(0);

    function handleMenu(){
        
        setIsMenuOpen(!isMenuOpen);
    }

    function handleReload(){
        window.location.reload()
    }

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll',  handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    
    return(
        <header className={`z-50 animate-fade-down animate-once animate-duration-1000 animate-delay-100 max-w-screen-xl mx-auto h-12 flex justify-between items-center fixed top-0 left-0 right-0 px-2
        sm:px-12 md:px-24 lg:px-36 ${scrollY > 0 ? "bg-[#00002ea5] opacity-50" : null}`}>

            <h1 onClick={handleReload} className="hover:animate-wiggle hover:animate-infinite hover:opacity-90 font-outfit text-xl tracking-widest font-bold cursor-pointer
            sm:text-2xl">PORTFOLIO</h1>
        
            <label htmlFor="menu" className={`${isMenuOpen ? 'z-0' : 'z-50'} 
            xl:hidden`}>
                {isMenuOpen ? <GiHamburgerMenu size={40}/> : <RxCross2 size={40} />}
            </label>
            
            <input className='hidden' value={isMenuOpen} onChange={handleMenu} id="menu" type="checkbox"></input>

            <nav className={`animate-fade-right animate-once font-roboto font-base text-xl bg-[#00002E] pt-[40px] fixed h-screen top-0 bottom-0 right-0 left-0 text-center items-center flex flex-col gap-3 ${isMenuOpen ? 'hidden' : ''}
            xl:block xl:relative xl:pt-0 xl:flex xl:flex-row xl:gap-8 xl:text-lg xl:h-0`}>
                <a onClick={handleMenu} className="hover:animate-wiggle hover:animate-infinite hover:opacity-75" href="#home">HOME</a>
                <a onClick={handleMenu} className="hover:animate-wiggle hover:animate-infinite hover:opacity-75" href="#about">ABOUT ME</a>
                <a onClick={handleMenu} className="hover:animate-wiggle hover:animate-infinite hover:opacity-75" href="#tech">TECH STACK</a>
                <a onClick={handleMenu} className="hover:animate-wiggle hover:animate-infinite hover:opacity-75" href="#project">PROJECT</a>
                <a onClick={handleMenu} className="hover:animate-wiggle hover:animate-infinite hover:opacity-75" href="#contact">CONTACT</a>
            </nav>
        </header>
    )
}

export default Header