import InternImage from './assets/intern/front.jpg'
import ThesisImage from './assets/thesis/front.jpg'
import WebSysImage from './assets/websys/front.jpg'

import Html from './assets/Html 5.png'
import Css from './assets/CSS3.png'
import JavaScript from './assets/JavaScript.png'
import BootStrap from './assets/Bootstrap.png'
import Php from './assets/PHP Logo.png'
import MySQL from './assets/MySQL Logo.png'
import VS from './assets/Visual Studio Code 2019.png' 

import Python from './assets/Python.png'
import { IoIosArrowDropdown } from "react-icons/io";

import GitHub from './assets/GitHub.png'

function Projects(){
    return(
        <section id="project" className="animate-fade-down animate-once animate-duration-1000 animate-delay-100 mt-12 p-5 bg-[#424C6F] border rounded-lg border-0 mx-2 max-w-screen-lg
        sm:mx-12 md:mx-24 lg:mx-36 xl:mx-auto">
           
           <p className="text-center font-outfit font-semibold mb-4 text-lg
            sm:text-2xl md:text-3xl lg:text-4xl">Projects</p>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 
             ">

                <div className='bg-[#54608e] rounded-lg font-roboto font-semibold'>
                    <div className='h-64 relative'>
                        <div className='absolute flex left-1 bottom-1 border rounded-sm p-1'>
                            <img className='w-5' src={Html}></img> 
                            <img className='w-5' src={Css}></img> 
                            <img className='w-5' src={JavaScript}></img> 
                            <img className='w-5' src={BootStrap}></img> 
                            <img className='w-5' src={Php}></img> 
                            <img className='w-5' src={MySQL}></img> 
                            <img className='w-5' src={VS}></img> 
                        </div>
                        <span className='absolute bg-[#4e5b8c] pl-3 pr-3 pt-2 pb-2 rounded-md 
                        h-max w-max mx-auto left-0 right-0 top-0 bottom-0 my-auto font-semibold font-roboto'>View Images</span>
                        <img className=' rounded-t-lg object-cover h-full w-full' src={InternImage}></img>
                    </div>  
                    <div className=' pt-2 pb-2'>
                        <p className='text-base text-center'>Document Approval System</p>
                        <p className='text-sm text-center'>Internship - Company</p>
                        <img className='mx-auto w-8' src={GitHub}></img>
                        <p className='text-sm text-[#5dc0f9] text-center'>Show responsibility..</p>
                    </div>  
                   
                </div>

                <div className='bg-[#54608e] rounded-lg font-roboto font-semibold'>
                    <div className='h-64 relative'>
                        <div className='absolute flex left-1 bottom-1 border rounded-sm p-1'>
                            <img className='w-5' src={Html}></img> 
                            <img className='w-5' src={Css}></img> 
                            <img className='w-5' src={JavaScript}></img> 
                            <img className='w-5' src={BootStrap}></img> 
                            <img className='w-5' src={Php}></img> 
                            <img className='w-5' src={MySQL}></img> 
                            <img className='w-5' src={VS}></img> 
                            <img className='w-5' src={Python}></img> 
                        </div>
                        <span className=' absolute bg-[#4e5b8c] pl-3 pr-3 pt-2 pb-2 rounded-md 
                        h-max w-max mx-auto left-0 right-0 top-0 bottom-0 my-auto font-semibold font-roboto'>View Images</span>
                        <img className='static rounded-t-lg object-cover h-full w-full' src={ThesisImage}></img>
                    </div>  
                    
                    <div className=' pt-2 pb-2'>
                        <p className='text-base text-center'>Noah's Ark Dog & Cat Shelter</p>
                        <p className='text-sm text-center'>Thesis - Company</p>
                        <img className='mx-auto w-8' src={GitHub}></img>
                        <p className='text-sm text-[#5dc0f9] text-center '>Show responsibility..</p>
                    </div>  
                </div>

                <div className='bg-[#54608e] rounded-lg font-roboto font-semibold'>
                    <div className='h-64 relative'>
                        <div className='absolute flex left-1 bottom-1 border rounded-sm p-1'>
                            <img className='w-5' src={Html}></img> 
                            <img className='w-5' src={Css}></img> 
                            <img className='w-5' src={JavaScript}></img> 
                            <img className='w-5' src={BootStrap}></img> 
                            <img className='w-5' src={Php}></img> 
                            <img className='w-5' src={MySQL}></img> 
                            <img className='w-5' src={VS}></img> 
                        </div>
                        <span className='absolute bg-[#4e5b8c] pl-3 pr-3 pt-2 pb-2 rounded-md 
                        h-max w-max mx-auto left-0 right-0 top-0 bottom-0 my-auto font-semibold font-roboto'>View Images</span>
                        <img className=' rounded-t-lg object-cover h-full w-full' src={WebSysImage}></img>
                    </div>    
                    <div className=' pt-2 pb-2'>
                        <p className='text-base text-center'>COOP Online Store</p>
                        <p className='text-sm text-center'>WebSys - Subject</p>
                        <img className='mx-auto w-8' src={GitHub}></img>
                        <p className='text-sm text-[#5dc0f9] text-center'>Show responsibility..</p>
                    </div>  
                </div>


                
        
            </div>

        </section>
    )
}

export default Projects;