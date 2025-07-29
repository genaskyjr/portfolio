import Html from './assets/Html 5.png'
import Css from './assets/CSS3.png'
import JavaScript from './assets/JavaScript.png'
import BootStrap from './assets/Bootstrap.png'
import Php from './assets/PHP Logo.png'
import MySQL from './assets/MySQL Logo.png'
import VS from './assets/Visual Studio Code 2019.png' 

import TailWind from './assets/Tailwindcss.png'
import ReactJs from './assets/React.png'
import Laravel from './assets/Laravel.png'
import NodeJs from './assets/Node Js.png'
import PostMan from './assets/Postman Api.png'
import GitHub from './assets/GitHub.png'
import Java from './assets/Java.png'
import CPlusPlus from './assets/C++.png'
import Python from './assets/Python.png'

import NextJs from './assets/Next.js.png'
import Aws from './assets/Amazon Web Services.png'
import Docker from './assets/Docker.png'

import Zod from './assets/zod.png'
import Axios from './assets/axios.png'
import Prisma from './assets/prisma.png'

import Express from './assets/express.png'

import ShadCn from './assets/shadcn.png'
import TypeScript from './assets/typescript.png'


function TechStacks(){
    return (
        <section id="tech" className="mt-12 p-5 bg-[#424C6F] border rounded-lg border-0 mx-2 max-w-screen-lg
        sm:mx-12 md:mx-24 lg:mx-36 xl:mx-auto">
            
            <p className="text-center font-outfit font-semibold mb-4 text-lg
            sm:text-2xl md:text-3xl lg:text-4xl">Tech Stacks / Tools</p>


            <div className="grid grid-cols-8 gap-2 lg:grid-cols-10 lg:gap-1 xl:grid-cols-12 xl:gap-4">

                <div className='w-full'>
                    <img className='' src={Html} alt="Html icon" />
                </div>

                <div  className='w-full'>
                    <img src={Css} alt="Css icon" />
                </div>
               
                <div  className='w-full'>
                    <img src={JavaScript} alt="JavaScript icon" />
                </div>

                <div  className='w-full'>
                    <img src={BootStrap} alt="BootStrap icon" />
                </div>

                <div  className='w-full'>
                    <img src={Php} alt="Php icon" />
                </div>

                <div  className='w-full'>
                    <img src={MySQL} alt="MySQL icon" />
                </div>
                
                <div  className='w-full'>
                    <img src={VS} alt="VS icon" />
                </div>

                <div className='w-full'>
                    <img className='' src={TailWind} alt="TailWind icon" />
                </div>

                <div className='w-full'>
                    <img src={ReactJs} alt="ReactJs icon" />
                </div>

                <div className='w-full'>
                    <img src={NextJs} alt="NextJS icon" />
                </div>

                <div className='w-full'>
                    <img className='' src={PostMan} alt="PostMan icon" />
                </div>
            
                <div className='w-full'>
                    <img className='' src={GitHub} alt="GitHub icon" />
                </div>

                <div className='w-full mt-1 lg:mt-2'>
                    <img src={Zod} alt="Zod icon" />
                </div>

                <div className='w-full mt-1 lg:mt-2'>
                    <img src={Axios} alt="Axios icon" />
                </div>

                <div className='w-full mt-1 lg:mt-2'>
                    <img src={Prisma} alt="Prisma icon" />
                </div>

                <div className='w-full mt-2 lg:mt-4'>
                    <img src={Express} alt="Express icon" className='rounded-sm' />
                </div>

                <div className='w-full mt-1 lg:mt-2'>
                    <img src={ShadCn} alt="Shadcn icon" className='rounded-sm' />
                </div>

                <div className='w-full mt-1 lg:mt-2'>
                    <img src={TypeScript} alt="TypeScript icon" />
                </div>




            </div>


            



        <p className='font-outfit font-semibold mt-5 mb-1'>Familiar In</p>

        <div className="grid grid-cols-8 gap-2 lg:grid-cols-10 lg:gap-1 xl:grid-cols-12 xl:gap-0 font-outfit font-semibold">



                <div className='w-full'>
                    <img className='' src={Laravel} alt="Laravel icon" />
                </div>
               
                <div className='w-full'>
                    <img src={Java} alt="Java icon" />
                </div>

                <div className='w-full'>
                    <img src={CPlusPlus} alt="CPlusPlus icon" />
                </div>

                <div className='w-full'>
                    <img src={Python} alt="Python icon" />
                </div>

        </div>



        <p className='font-outfit font-semibold mt-5 mb-1'>Skills</p>

        <div className="grid grid-cols-8 gap-2 lg:grid-cols-10 lg:gap-1 xl:grid-cols-12 xl:gap-0 font-outfit font-semibold">


    
                <div className='w-full self-center'>
                    <p>OOP</p>
                </div>

                <div className='w-full self-center'>
                    <p>MVC</p>
                </div>

                <div className='w-full self-center'>
                    <p className=''>SOLID Principle</p>
                </div>

                <div className='w-full self-center'>
                    <p className=''>System Design</p>
                </div>

                <div className='w-full self-center'>
                    <p className=''>Database Design</p>
                </div>

        </div>


      

        
        </section>
    )
}

export default TechStacks;