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
import dasVideo from './assets/videos/das.mp4'
import PayrollVideo from './assets/videos/payroll.mp4'
import CashFlowVideo from './assets/videos/cashflow.mp4'
import { useState } from 'react'
import PayrollImage from './assets/images/payroll.png'

import CashFlowImage from './assets/images/cashflow.png'

function Projects(){

    //das
    const [isOpen, setIsOpen] = useState(false)

    //payroll
    const [isOpen1, setIsOpen1] = useState(false)

    //cashflow
    const [isOpen2, setIsOpen2] = useState(false)




    return(
        <>



        {/* cashflow */}
        <div className={`${isOpen2 ? 'visible' : 'hidden'}`}>
            <div id="myModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white rounded-2xl p-6 w-11/12 max-w-md mx-auto shadow-xl relative">
                  
                    <button onClick={()=>{setIsOpen2(false)}} class="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onclick="document.getElementById('myModal').classList.add('hidden')">
                    ✕
                    </button>

                   
                    <h2 class="text-xl font-semibold mb-4 text-gray-600">CashFlow</h2>
                    
                    <div className="images overflow-x-scroll">
                        <div className="w-full aspect-video bg-black">
                            <video
                                className="w-full h-full"
                                controls
                                autoPlay
                            >
                                <source src={CashFlowVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                  
                    <div class="text-right ">
                    <button onClick={()=>{setIsOpen2(false)}} class="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 mt-4" onclick="document.getElementById('myModal').classList.add('hidden')">
                        Close
                    </button>
                    
                    </div>
                </div>
            </div>
        </div>


        {/* payroll */}
        <div className={`${isOpen1 ? 'visible' : 'hidden'}`}>
            <div id="myModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white rounded-2xl p-6 w-11/12 max-w-md mx-auto shadow-xl relative">
                  
                    <button onClick={()=>{setIsOpen1(false)}} class="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onclick="document.getElementById('myModal').classList.add('hidden')">
                    ✕
                    </button>

                   
                    <h2 class="text-xl font-semibold mb-4 text-gray-600">Simplified Payroll</h2>
                    
                    <div className="images overflow-x-scroll">
                        <div className="w-full aspect-video bg-black">
                            <video
                                className="w-full h-full"
                                controls
                                autoPlay
                            >
                                <source src={PayrollVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                  
                    <div class="text-right ">
                    <button onClick={()=>{setIsOpen1(false)}} class="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 mt-4" onclick="document.getElementById('myModal').classList.add('hidden')">
                        Close
                    </button>
                    
                    </div>
                </div>
            </div>
        </div>



        {/* das */}
        <div className={`${isOpen ? 'visible' : 'hidden'}`}>
            <div id="myModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white rounded-2xl p-6 w-11/12 max-w-md mx-auto shadow-xl relative">
                  
                    <button onClick={()=>{setIsOpen(false)}} class="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onclick="document.getElementById('myModal').classList.add('hidden')">
                    ✕
                    </button>

                   
                    <h2 class="text-xl font-semibold mb-4 text-gray-600">Document Approval System</h2>
                    
                    <div className="images overflow-x-scroll">
                        <div className="w-full aspect-video bg-black">
                            <video
                                className="w-full h-full"
                                controls
                                autoPlay
                            >
                                <source src={dasVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                  
                    <div class="text-right ">
                    <button onClick={()=>{setIsOpen(false)}} class="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 mt-4" onclick="document.getElementById('myModal').classList.add('hidden')">
                        Close
                    </button>
                    
                    </div>
                </div>
            </div>
        </div>


  
        <section id="project" className="animate-fade-down animate-once animate-duration-1000 animate-delay-100 mt-12 p-5 bg-[#424C6F] border rounded-lg border-0 mx-2 max-w-screen-lg
        sm:mx-12 md:mx-24 lg:mx-36 xl:mx-auto">
           
           <p className="text-center font-outfit font-semibold mb-4 text-lg
            sm:text-2xl md:text-3xl lg:text-4xl">Projects</p>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 
             ">




                <div className='bg-[#54608e] rounded-lg font-roboto font-semibold'>
                    <div className='h-64 relative'>
                        
                        {/* <span className='absolute bg-[#4e5b8c] pl-3 pr-3 pt-2 pb-2 rounded-md 
                        h-max w-max mx-auto left-0 right-0 top-0 bottom-0 my-auto font-semibold font-roboto'>View Images</span> */}
                        <img className=' rounded-t-lg object-cover h-full w-full' src={CashFlowImage}></img>
                    </div>  
                    <div className=' pt-2 pb-2 pl-3'>
                        <p className='text-base '>CashFlow</p>
                        <p className='text-sm '>Myracle Innovation - Company</p>
                        <p className='text-xs '>&bull; Responsibilty: Full Stack Developer</p>
                        <p className='text-xs '>&bull; FE: Bootraps + custom css + AJAX + JQUERY + ApexChart</p>
                        <p className='text-xs '>&bull; BE: PHP PHP-PDO</p>
                        <p className='text-xs '>&bull; Database: MySql</p>
                        <p className='text-xs '>&bull; Coding Style: OOP MVC SOLID</p>
                        <button onClick={()=>{setIsOpen2(true)}} className='border p-1 ps-6 pe-6 rounded-sm shadow-lg mb-2 mt-2 hover:text-slate-700 hover:bg-slate-300'>View</button>
                        
                       
                    </div>  
                   
                </div>



                <div className='bg-[#54608e] rounded-lg font-roboto font-semibold'>
                    <div className='h-64 relative'>
                        
                        {/* <span className='absolute bg-[#4e5b8c] pl-3 pr-3 pt-2 pb-2 rounded-md 
                        h-max w-max mx-auto left-0 right-0 top-0 bottom-0 my-auto font-semibold font-roboto'>View Images</span> */}
                        <img className=' rounded-t-lg object-cover h-full w-full' src={PayrollImage}></img>
                    </div>  
                    <div className=' pt-2 pb-2 pl-3'>
                        <p className='text-base '>Simplified Payroll</p>
                        <p className='text-sm '>Myracle Innovation - Company</p>
                        <p className='text-xs '>&bull; Responsibilty: Full Stack Developer</p>
                        <p className='text-xs '>&bull; FE: Bootraps + custom css + AJAX + JQUERY</p>
                        <p className='text-xs '>&bull; BE: PHP PHP-PDO</p>
                        <p className='text-xs '>&bull; Database: MySql</p>
                        <p className='text-xs '>&bull; Coding Style: OOP MVC SOLID</p>
                        <button onClick={()=>{setIsOpen1(true)}} className='border p-1 ps-6 pe-6 rounded-sm shadow-lg mb-2 mt-2 hover:text-slate-700 hover:bg-slate-300'>View</button>
                        
                       
                    </div>  
                   
                </div>

     

                <div className='bg-[#54608e] rounded-lg font-roboto font-semibold'>
                    <div className='h-64 relative'>
                        
                        {/* <span className='absolute bg-[#4e5b8c] pl-3 pr-3 pt-2 pb-2 rounded-md 
                        h-max w-max mx-auto left-0 right-0 top-0 bottom-0 my-auto font-semibold font-roboto'>View Images</span> */}
                        <img className=' rounded-t-lg object-cover h-full w-full' src={InternImage}></img>
                    </div>  
                    <div className=' pt-2 pb-2 pl-3'>
                        <p className='text-base '>Document Approval System</p>
                        <p className='text-sm '>Internship - Company</p>
                        <p className='text-xs '>&bull; Responsibilty: Full Stack Developer</p>
                        <p className='text-xs '>&bull; FE: Bootraps + custom css + AJAX + JQUERY</p>
                        <p className='text-xs '>&bull; BE: PHP PHP-PDO, CRON Jobs</p>
                        <p className='text-xs '>&bull; Database: MySql</p>
                        <p className='text-xs '>&bull; Additional: Pdf-lib</p>
                        <p className='text-xs '>&bull; Web Hosting: OrangeHost CPanel</p>
                        <p className='text-xs '>&bull; Domain: https://atsdasph.com</p>
                        <p className='text-xs '>&bull; Coding Style: Procedural</p>
                        <a href='https://github.com/genaskyjr/document-approval-system'><img className='pt-2 w-8' src={GitHub}></img></a>
                        <button onClick={()=>{setIsOpen(true)}} className='border p-1 ps-6 pe-6 rounded-sm shadow-lg mb-2 mt-2 hover:text-slate-700 hover:bg-slate-300'>View</button>
                        
                       
                    </div>  
                   
                </div>

                <div className='bg-[#54608e] rounded-lg font-roboto font-semibold'>
                    <div className='h-64 relative'>
                        {/* <div className='absolute flex left-1 bottom-1 border rounded-sm p-1'>
                            <img className='w-5' src={Html}></img> 
                            <img className='w-5' src={Css}></img> 
                            <img className='w-5' src={JavaScript}></img> 
                            <img className='w-5' src={BootStrap}></img> 
                            <img className='w-5' src={Php}></img> 
                            <img className='w-5' src={MySQL}></img> 
                            <img className='w-5' src={VS}></img> 
                            <img className='w-5' src={Python}></img> 
                        </div> */}
                        {/* <span className=' absolute bg-[#4e5b8c] pl-3 pr-3 pt-2 pb-2 rounded-md 
                        h-max w-max mx-auto left-0 right-0 top-0 bottom-0 my-auto font-semibold font-roboto'>View Images</span> */}
                        <img className='static rounded-t-lg object-cover h-full w-full' src={ThesisImage}></img>
                    </div>  
                    
                    <div className=' pt-2 pb-2 pl-3'>
                        <p className='text-base'>Noah's Ark Dog & Cat Shelter</p>
                        <p className='text-sm'>Thesis - Company</p>
                        <p className='text-xs  '>&bull; Responsibilty: Full Stack Developer</p>
                        <p className='text-xs '>&bull; FE: Bootraps + custom css + AJAX + JQUERY</p>
                        <p className='text-xs '>&bull; BE: PHP PHP-PDO PYTHON BASH-SCRIPT</p>
                        <p className='text-xs '>&bull; Database: MySql</p>
                        <p className='text-xs '>&bull; Additional: Google Maps API, Tensorflow-imageClassification, YoLoV5-Object Detection</p>
                        <p className='text-xs '>&bull; Web Hosting: VULTR VPS</p>
                        <p className='text-xs '>&bull; Coding Style: Procedural</p>
                        <a href='https://github.com/genaskyjr/noah-ark'><img className='pt-2 w-8' src={GitHub}></img></a>
                    </div>  
                </div>

                <div className='bg-[#54608e] rounded-lg font-roboto font-semibold'>
                    <div className='h-64 relative'>
                        {/* <div className='absolute flex left-1 bottom-1 border rounded-sm p-1'>
                            <img className='w-5' src={Html}></img> 
                            <img className='w-5' src={Css}></img> 
                            <img className='w-5' src={JavaScript}></img> 
                            <img className='w-5' src={BootStrap}></img> 
                            <img className='w-5' src={Php}></img> 
                            <img className='w-5' src={MySQL}></img> 
                            <img className='w-5' src={VS}></img> 
                        </div> */}
                        {/* <span className='absolute bg-[#4e5b8c] pl-3 pr-3 pt-2 pb-2 rounded-md 
                        h-max w-max mx-auto left-0 right-0 top-0 bottom-0 my-auto font-semibold font-roboto'>View Images</span> */}
                        <img className=' rounded-t-lg object-cover h-full w-full' src={WebSysImage}></img>
                    </div>    
                    <div className=' pt-2 pb-2 pl-3'>
                        <p className='text-base '>COOP Online Store</p>
                        <p className='text-sm '>WebSys - Subject</p>
                        <p className='text-xs '>&bull; FE: Bootraps + custom css</p>
                        <p className='text-xs '>&bull; BE: PHP PHP-PDO</p>
                        <p className='text-xs '>&bull; Database: MySql</p>
                        <p className='text-xs '>&bull; Coding Style: Procedural</p>
                        <a href='https://github.com/genaskyjr/coop-online-store'><img className='pt-2 w-8' src={GitHub}></img></a>
                    </div>  
                </div>


                
        
            </div>

        </section>
        </>

  

        
    )
}

export default Projects;