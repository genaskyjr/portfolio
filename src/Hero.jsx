import HeroImage from './assets/hero-image.png'
import { FaDownload } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
function Hero(){

  
    return(
        <section className='mt-20 inline-block w-full px-2'>

            <section className='flex justify-between'>
                <article>
                    <p className='animate-bounce animate-infinite text-4xl font-outfit font-bold relative -z-10'>Hi There!</p>

                    <p className='text-2xl font-outfit font-bold'>I'am <span className='text-4xl text-[#76BFE8] font-outfit font-bold'>Genasky Jr.</span></p>
                    <p className='text-3xl text-[#5dc0f9] font-outfit font-bold'>Junior Web Developer</p>
                    <p className='text-xs font-outfit font-bold'>&bull; Willing to relocate &amp; Willing to be train.</p>
                    <section className='gap-2 flex'>
                        
                        <button className='font-outfit font-semibold text-md mt-4 pl-8 pr-8 pt-1 pb-1 bg-[#424C6F] rounded-lg'>RESUME <FaDownload size={15} className='inline-block align-text-middle pb-[3px]'/></button>
                        <button className='mt-4 pl-2 pr-2 pt-1 pb-1 rounded-sm border-[#76BFE8] border-2 rounded-lg'><IoCall size={25} className='inline-block align-text-middle pb-[3px]'/></button>
                        <button className='mt-4 pl-2 pr-2 pt-1 pb-1 rounded-sm border-[#76BFE8] border-2 rounded-lg'> <SiGmail size={25} className='inline-block align-text-middle pb-[3px]'/> <span className="icon-[logos--google-gmail]"></span></button>
                        
                        

                    </section>
                </article>
                
                <article>
                    <img className=' w-36 mx-auto' src={HeroImage}></img>
                </article>

            </section>

        </section>

        
    
    )
}

export default Hero