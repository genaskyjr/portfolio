import { IoIosArrowDropdown } from "react-icons/io";
function About(){
    return(
        <section id="about" className=" mt-12 p-5 bg-[#424C6F] border rounded-lg border-0 mx-2 max-w-screen-lg
        sm:mx-12 md:mx-24 lg:mx-36 xl:mx-auto">
            <p className="text-center font-outfit font-semibold mb-4 text-lg
            sm:text-2xl md:text-3xl lg:text-4xl">About me</p>
            <p className="text-center font-roboto font-semibold tracking-wide text-xs
            sm:text-sm md:text-base lg:text-lg">I graduated with a <span className="text-[#76BFE8] font-extrabold text-lg">Computer Science Degree</span> from <span className="text-[#76BFE8] font-extrabold">Don Honorio Ventura State University</span>. With a proven passion for web development, 
            I am eager to leverage my skills to create innovative digital experiences. 
    
            My <span className="text-[#76BFE8] font-extrabold">strong problem-solving abilities</span> and <span className="text-[#76BFE8] font-extrabold">dedication to producing high-quality code</span> make me a valuable asset to any development team.</p>
{/* 
            <IoIosArrowDropdown size={30} className="text-[#76BFE8] mx-auto"/>

            <p className="text-center font-roboto font-semibold tracking-wide text-xs
            sm:text-sm md:text-base lg:text-lg"></p> */}

        </section>
    )
}

export default About;