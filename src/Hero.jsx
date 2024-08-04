import HeroImage from './assets/hero-image.png'
import { FaDownload } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import GmailImage from  './assets/gmail-icon.png';
import MessagerImage from './assets/messager-icon.png';

import Resume from './assets/genasky-resume.pdf';

import { FaHeart } from "react-icons/fa";


function Hero(){

  
    return(
        
        <section id="home" className=' mt-12 inline-block w-full max-w-screen-xl mx-auto xl:flex xl:mt-28 lg:px-36'>
            
            <img className='  w-40 mx-auto lg:order-2
            sm:w-44 md:w-48 xl:w-96 xl:mr-0' src={HeroImage}></img>

            <section className=' text-center xl:text-start xl:content-center'>
                <p className='animate-bounce mx-auto  animate-infinite font-outfit font-bold relative -z-10 text-2xl
                sm:text-3xl md:text-4xl lg:text-5xl'>Hi There!</p>
                <p className='font-outfit font-bold text-2xl 
                sm:text-3xl md:text-4xl lg:text-5xl'>I'am <span className='pl-1 text-[#76BFE8] font-outfit font-bold text-3xl
                sm:text-4xl md:text-5xl lg:text-6xl'>Genasky Jr.</span></p>
                <p className='text-[#5dc0f9] font-outfit font-bold mb-4  text-3xl
                sm:text-4xl md:text-5xl lg:text-5xl'>Web Developer</p>
                        
                <p className=' font-outfit font-bold text-xs
                sm:text-sm md:text-base lg:text-lg'>&bull; Willing to relocate. </p>

                <p className=' font-outfit font-bold text-xs
                sm:text-sm md:text-base lg:text-lg'>&bull; Willing to train. </p>

                <section className='gap-2 flex justify-center xl:justify-start mt-1'>
                    
                    <a href={Resume} target='_blank'  className='hover:animate-wiggle hover:animate-infinite hover:opacity-75 font-outfit font-semibold pl-8 pr-8 pt-1 pb-1 bg-[#424C6F] rounded-lg border-x-emerald-50 border-2 hover:cursor-pointer'> <FaDownload size={17} className='inline-block align-text-middle pb-[3px]'/> RESUME</a>
                    <a href='tel:+639287152180' className='hover:animate-wiggle hover:animate-infinite hover:opacity-75 pl-2 pr-2 rounded-lg bg-[#424C6F] border-x-emerald-50 border-2 hover:opacity-90 pt-1'><IoCall size={25} className=''/></a>
                    <a href="mailto:genaskypinlac0@gmail.com" className='hover:animate-wiggle hover:animate-infinite hover:opacity-75 px-2 py-2 rounded-lg bg-[#424C6F] border-x-emerald-50 border-2 hover:opacity-90'><img className='w-6' src={GmailImage} alt="Gmail icon" /></a>
                    <a href='https://m.me/genaskyjr' className='hover:animate-wiggle hover:animate-infinite hover:opacity-75 pl-2 pr-2 rounded-lg bg-[#424C6F] border-x-emerald-50 border-2 hover:opacity-90 pt-1'><img className='w-6' src={MessagerImage} alt="Messager icon" /></a>
                </section>

            </section>
            
        </section>

        
    
    )
}

export default Hero