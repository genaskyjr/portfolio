import InternImage from './assets/intern/front.jpg'
import ThesisImage from './assets/thesis/front.jpg'
import WebSysImage from './assets/websys/front.jpg'

import GitHub from './assets/GitHub.png'

function Projects(){
    return(
        <section className="mt-12 p-5 bg-[#424C6F] border rounded-lg border-0 mx-2 max-w-screen-lg
        sm:mx-12 md:mx-24 lg:mx-36 xl:mx-auto">
           
           <p className="text-center font-outfit font-semibold mb-4 text-lg
            sm:text-2xl md:text-3xl lg:text-4xl">Projects</p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3
             ">

                <div className='w-full bg-[#54608e] border-1 ring-inset rounded-lg font-roboto font-semibold'>
                    <img className='rounded-t-md min-h-[60%]' src={InternImage}></img>
                    <div className=' pt-3 pb-3'>
                        <p className='text-base text-center'>Document Approval System</p>
                        <p className='text-base text-center'>Internship - Company</p>
                        <img className='mx-auto' src={GitHub}></img>
                        <p className='text-sm text-[#5dc0f9] text-center'>Show responsibility..</p>
                    </div>  
                </div>
                
                <div className='w-full bg-[#54608e] border-1 ring-inset rounded-lg font-roboto font-semibold'>
                    <img className='rounded-t-md min-h-[60%]' src={ThesisImage}></img>
                    <div className=' pt-3 pb-3'>
                        <p className='text-base text-center'>Noah's ark dog & Cat Shelter</p>
                        <p className='text-base text-center'>Thesis - Subject</p>
                        <img className='mx-auto' src={GitHub}></img>
                        <p className='text-sm text-[#5dc0f9] text-center'>Show responsibility..</p>
                    </div>  
                </div>

                <div className='w-full bg-[#54608e] border-1 ring-inset rounded-lg font-outfit font-semibold'>
                    <img className='rounded-t-md min-h-[60%]' src={WebSysImage}></img>
                    <div className=' pt-3 pb-3'>
                        <p className='text-base text-center'>Coop Online Store</p>
                        <p className='text-base text-center'>WebSys - Subject</p>
                        <img className='mx-auto' src={GitHub}></img>
                        <p className='text-sm text-[#5dc0f9] text-center'>Show responsibility..</p>
                    </div>  
                </div>


            </div>

        </section>
    )
}

export default Projects;