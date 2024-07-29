import InternImage from './assets/intern/front.jpg'
import ThesisImage from './assets/thesis/front.jpg'
import WebSysImage from './assets/websys/front.jpg'

import { IoIosArrowDropdown } from "react-icons/io";

import GitHub from './assets/GitHub.png'

function Projects(){
    return(
        <section className="mt-12 p-5 bg-[#424C6F] border rounded-lg border-0 mx-2 max-w-screen-lg
        sm:mx-12 md:mx-24 lg:mx-36 xl:mx-auto">
           
           <p className="text-center font-outfit font-semibold mb-4 text-lg
            sm:text-2xl md:text-3xl lg:text-4xl">Projects</p>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6
             ">

                <div className='bg-[#54608e] rounded-lg font-roboto font-semibold'>
                    <div className=' h-64'>
                        <img className='rounded-t-lg object-cover h-full w-full' src={InternImage}></img>
                    </div>  
                    <div className=' pt-2 pb-2'>
                        <p className='text-base text-center'>Document Approval System</p>
                        <p className='text-sm text-center'>Internship - Company</p>
                        <img className='mx-auto' src={GitHub}></img>
                        <p className='text-xs text-[#5dc0f9] text-center pl-4'>Show responsibility..</p>
                    </div>  
                </div>

                <div className='bg-[#54608e] rounded-lg font-roboto font-semibold'>
                    <div className=' h-64 '>
                        <img className='rounded-t-lg object-cover h-full w-full' src={ThesisImage}></img>
                    </div>  
                    <div className=' pt-2 pb-2'>
                        <p className='text-base text-center'>Noah's Ark Dog & Cat Shelter</p>
                        <p className='text-sm text-center'>Thesis - Company</p>
                        <img className='mx-auto' src={GitHub}></img>
                        <p className='text-xs text-[#5dc0f9] text-center pl-4'>Show responsibility</p>
                    </div>  
                </div>

                                <div className='bg-[#54608e] rounded-lg font-roboto font-semibold'>
                    <div className=' h-64  '>
                        <img className='rounded-t-lg object-cover h-full w-full' src={WebSysImage}></img>
                    </div>  
                    <div className=' pt-2 pb-2'>
                        <p className='text-base text-center'>Document Approval System</p>
                        <p className='text-sm text-center'>WebSys - Company</p>
                        <img className='mx-auto' src={GitHub}></img>
                        <p className='text-xs text-[#5dc0f9] text-center pl-4'>Show responsibility..</p>
                    </div>  
                </div>


                
        
            </div>

        </section>
    )
}

export default Projects;