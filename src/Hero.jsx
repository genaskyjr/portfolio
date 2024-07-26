import HeroImage from './assets/hero-image.png'
import { FaDownload } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
function Hero(){

  
    return(
        
        <section className='mt-14 inline-block w-full px-2'>
            <img className='w-40 mx-auto' src={HeroImage}></img>

            <p className='animate-bounce mx-auto text-center animate-infinite text-2xl font-outfit font-bold relative -z-10'>Hi There!</p>
            <p className='text-2xl font-outfit font-bold text-center'>I'am <span className='pl-1 text-3xl text-[#76BFE8] font-outfit font-bold'>Genasky Jr.</span></p>
            <p className='text-3xl text-[#5dc0f9] font-outfit font-bold mb-4 text-center'>Junior Web Developer</p>
                    
            <p className='text-xs font-outfit font-bold text-center'>&bull; Willing to relocate &amp; Willing to be train.</p>

            <section className='gap-2 flex justify-center'>
                <button className='font-outfit font-semibold text-md pl-8 pr-8 bg-[#424C6F] rounded-lg'> <FaDownload size={17} className='inline-block align-text-middle pb-[3px]'/> RESUME</button>
                <button className='pl-2 pr-2 rounded-sm border-[#76BFE8] border-2 rounded-lg'><IoCall size={25} className='inline-block align-text-middle pb-[3px]'/></button>
                <button className='pl-2 pr-2 rounded-sm border-[#76BFE8] border-2 rounded-lg'> <SiGmail size={25} className='inline-block align-text-middle pb-[3px]'/> <span className="icon-[logos--google-gmail]"></span></button>
            </section>

        </section>

        
    
    )
}

export default Hero