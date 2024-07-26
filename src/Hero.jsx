import HeroImage from './assets/hero-image.png'
import { FaDownload } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
function Hero(){

  
    return(
        
        <section className='mt-14 inline-block w-full px-2'>
            <img className='w-40 mx-auto
            sm:w-44 md:w-48 lg:w-52' src={HeroImage}></img>

            <p className='animate-bounce mx-auto text-center animate-infinite font-outfit font-bold relative -z-10 text-2xl
            sm:text-3xl md:text-4xl lg:text-5xl'>Hi There!</p>
            <p className='font-outfit font-bold text-center text-2xl 
            sm:text-3xl md:text-4xl lg:text-5xl'>I'am <span className='pl-1 text-[#76BFE8] font-outfit font-bold text-3xl
            sm:text-4xl md:text-5xl lg:text-6xl'>Genasky Jr.</span></p>
            <p className='text-[#5dc0f9] font-outfit font-bold mb-4 text-center text-3xl
            sm:text-4xl md:text-5xl lg:text-6xl'>Junior Web Developer</p>
                    
            <p className='text-xs font-outfit font-bold text-center'>&bull; Willing to relocate &amp; Willing to be train.</p>

            <section className='gap-2 flex justify-center mt-1'>
                <button className='font-outfit font-semibold text-md pl-8 pr-8 pt-1 pb-1 bg-[#424C6F] rounded-lg border-x-emerald-50 border-2'> <FaDownload size={17} className='inline-block align-text-middle pb-[3px]'/> CV</button>
                <button className='pl-2 pr-2 rounded-lg bg-[#424C6F] border-x-emerald-50 border-2 hover:opacity-90'><IoCall size={25} className='inline-block align-text-middle pb-[3px]'/></button>
                <button className='pl-2 pr-2 rounded-lg bg-[#424C6F] border-x-emerald-50 border-2'> <SiGmail size={25} className='inline-block align-text-middle pb-[3px]'/> <span className="icon-[logos--google-gmail]"></span></button>
            </section>

        </section>

        
    
    )
}

export default Hero