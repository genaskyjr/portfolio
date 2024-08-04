import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

function About(){

    const [isExpand,setIsExpand] = useState(false)

    function handleIsExpand(){
        setIsExpand(!isExpand)
    }


    return(
        <section id="about" className=" mt-12 p-5 bg-[#424C6F] border rounded-lg border-0 mx-2 max-w-screen-lg
        sm:mx-12 md:mx-24 lg:mx-36 xl:mx-auto">
            <p className="text-center font-outfit font-semibold mb-4 text-lg
            sm:text-2xl md:text-3xl lg:text-4xl">About me</p>
            <p className="text-center font-roboto font-semibold tracking-wide text-xs
            sm:text-sm md:text-base lg:text-lg">I am passionate in <span className="text-[#76BFE8] font-extrabold text-lg">Web Development</span> with <span className="text-[#76BFE8] font-extrabold text-lg">Computer Science Degree</span> from <span className="text-[#76BFE8] font-extrabold">Don Honorio Ventura State University.</span> With a proven passion for web development, 
            I am eager to leverage my skills to create innovative digital experiences. </p>

    
            <IoIosArrowDropdown di="icon" size={30} onClick={handleIsExpand} className={`${isExpand ? "rotate-180 " : "animate-bounce mx-auto  animate-infinite"} text-[#76BFE8] mx-auto mt-4 hover:cursor-pointer `}/>

            <p onClick={handleIsExpand} className='font-outfit font-bold text-xs
                sm:text-sm md:text-base text-center mt-0'>Show more</p>

            <div className={`${isExpand ? "mt-3 animate-fade-down animate-once animate-duration-1000 animate-delay-100" : "hidden "} 
            mx-auto flex flex-col gap-y-2 border p-4 max-w-screen-md`}>

                <p>i have 3 projects that made bootraps + custom css + php + mysql.</p><br></br>

                <p>after my last project internship(feb 14 - april 12).</p>

                <p>i study oop mvc solid in Php</p>

                <p>then Vanilla Js, Css</p>

                <p>then Github</p>

                <p>then React</p>

                <p>then Tailwind</p>

                <p>Then i Build this Portfolio Vite React + Tailwind with github Version Control.</p><br></br>

                <p>you will see here every commits/changes:</p>
                <p><a className="text-[#76BFE8]" href="https://github.com/genaskyjr/portfolio/commits/main/">Portfolio repository</a></p><br></br><br></br>

                <p>and now im looking for job ( august 1st )</p>

                <p>and im ready to work with a team as</p><br></br>

                <p>General: associate web developer or junior web developer</p>
                <p>Focus: junior Front-end developer</p>
                <p>Focus: junior Back-end developer</p><br></br>

                <p>I really love programming!</p><br></br>

            </div>

    
         

        </section>
    )
}

export default About;