
function Header(){

    function handleReload(){
        window.location.reload();
    }

    return (
        <header className=" text-white flex justify-between h-[50px] px-[185px] items-center fixed left-0 right-0">
            <h1 onClick={handleReload} className="font-bold text-lg font-outfit hover:cursor-pointer">PORTFOLIO</h1>
            <ul className="flex gap-10 font-roboto font-medium list-none">
                <li className="hover:cursor-pointer hover:border-b-[3px] hover:mb-[-3px] ease-in-out duration-100">HOME</li>
                <li className="hover:cursor-pointer hover:border-b-[3px] hover:mb-[-3px] ease-in-out duration-100">ABOUT ME</li>
                <li className="hover:cursor-pointer hover:border-b-[3px] hover:mb-[-3px] ease-in-out duration-100">TECH STACKS</li>
                <li className="hover:cursor-pointer hover:border-b-[3px] hover:mb-[-3px] ease-in-out duration-100">PROJECTS</li>
                <li className="hover:cursor-pointer hover:border-b-[3px] hover:mb-[-3px] ease-in-out duration-100">CONTACT</li>
            </ul>
        </header>
   )
}

export default Header