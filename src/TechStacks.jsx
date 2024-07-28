import Html from './assets/Html 5.png'
import Css from './assets/CSS3.png'
import JavaScript from './assets/JavaScript.png'
import BootStrap from './assets/Bootstrap.png'
import Php from './assets/PHP Logo.png'
import MySQL from './assets/MySQL Logo.png'
import VS from './assets/Visual Studio Code 2019.png' 

function TechStacks(){
    return (
        <section className="mt-12 p-5 bg-[#424C6F] border rounded-lg border-0 mx-2 max-w-screen-lg
        sm:mx-12 md:mx-24 lg:mx-36 xl:mx-auto">
            
            <p className="text-center font-outfit font-semibold mb-4 text-lg
            sm:text-2xl md:text-3xl lg:text-4xl">Tech Stacks</p>

            <div class="grid gap-10 grid-cols-12">
            <div className='w-8 relative hover:cursor-pointer group'><img className='' src={Html} alt="Html icon" />
                <span className='group-hover:block absolute -top-3 inline-block w-auto bg-[#00002ea5] opacity-50 border-1 left-0 right-0 
                text-center text-[7px] rounded-sm font-extrabold hidden'>HTML</span>
            </div>
            <div  className='w-8'><img src={Css} alt="Css icon" /></div>
            <div  className='w-8'><img src={JavaScript} alt="JavaScript icon" /></div>
            <div  className='w-8'><img src={BootStrap} alt="BootStrap icon" /></div>
            <div  className='w-8'><img src={Php} alt="Php icon" /></div>
            <div  className='w-8'><img src={MySQL} alt="MySQL icon" /></div>
            <div  className='w-8'><img src={VS} alt="VS icon" /></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>





        </section>
    )
}

export default TechStacks;