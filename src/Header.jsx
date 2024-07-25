import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(true)

    function handleMenu(){
        setIsMenuOpen(!isMenuOpen);
    }

    function handleReload(){
        window.location.reload()
    }
    
    return(
        <header className=" max-w-screen-xl mx-auto h-[40px] flex justify-between items-center fixed left-0 right-0 px-[8px] animate-fade-down animate-once
        sm:px-[48px] md:px-[88px] lg:px-[150px]">

            <h1 onClick={handleReload} className="hover:animate-wiggle hover:animate-infinite hover:opacity-75 font-outfit font-bold cursor-pointer
            lg:font-extrabold lg:text-lg">PORTFOLIO</h1>
        
            <label htmlFor="menu" className={`${isMenuOpen ? 'z-0' : 'z-10'} 
            xl:hidden`}>
                {isMenuOpen ? <GiHamburgerMenu size={25}/> : <RxCross2 size={35} />}
            </label>
            
            <input className='hidden' value={isMenuOpen} onChange={handleMenu} id="menu" type="checkbox"></input>

            <nav className={`animate-fade-right animate-once font-roboto font-semibold bg-[#00002E] pt-[40px] fixed top-0 bottom-0 right-0 left-0 text-center items-center flex flex-col gap-3 ${isMenuOpen ? 'hidden' : ''}
            xl:block xl:relative xl:pt-0 xl:flex xl:flex-row xl:gap-8`}>
                <a className="hover:animate-wiggle hover:animate-infinite hover:opacity-75" href="#home">HOME</a>
                <a className="hover:animate-wiggle hover:animate-infinite hover:opacity-75" href="#home">ABOUT ME</a>
                <a className="hover:animate-wiggle hover:animate-infinite hover:opacity-75" href="#home">TECH STACK</a>
                <a className="hover:animate-wiggle hover:animate-infinite hover:opacity-75" href="#home">PROJECT</a>
                <a className="hover:animate-wiggle hover:animate-infinite hover:opacity-75" href="#home">CONTACT</a>
            </nav>
        </header>
    )
}

export default Header