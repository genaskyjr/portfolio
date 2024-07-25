import HeroImage from './assets/hero-image.png'
import { FaDownload } from "react-icons/fa";
function Hero(){
    return(
        <section className=' mt-14 inline-block w-full px-2'>

            <section className=' flex justify-between'>
                <article>
                    <p className='animate-bounce animate-infinite text-xl font-outfit font-bold relative -z-10'>Hi There!</p>

                    <p className='text-1xl font-outfit font-bold'>I'am <span className='text-2xl text-[#76BFE8] font-outfit font-bold'>Genasky Jr.</span></p>
                    <p className='text-xl text-[#5dc0f9] font-outfit font-bold'>Junior Web Developer</p>
                    <p className='text-xs font-outfit font-bold'>&bull; Willing to relocate &amp; Willing to be train.</p>
                    <buttons>
                        
                        <button className='font-outfit font-bold text-[10px] pl-4 pr-4 bg-[#424C6F] rounded-sm'>RESUME <FaDownload size={9} className='inline-block align-text-middle pb-[3px]'/></button>
                    </buttons>
                </article>
                
                <article>
                    <img className=' w-36 mx-auto' src={HeroImage}></img>
                </article>

            </section>

        </section>

        
    
    )
}

export default Hero