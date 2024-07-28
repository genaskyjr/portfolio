function Projects(){
    return(
        <section className="mt-12 p-5 bg-[#424C6F] border rounded-lg border-0 mx-2 max-w-screen-lg
        sm:mx-12 md:mx-24 lg:mx-36 xl:mx-auto">
           
           <p className="text-center font-outfit font-semibold mb-4 text-lg
            sm:text-2xl md:text-3xl lg:text-4xl">Projects</p>

            <div class="grid grid-cols-2 lg:grid-cols-10 gap-2
             lg:gap-1 xl:grid-cols-12 xl:gap-0">
                <div className='w-full border'>
                   1
                </div>
                <div  className='w-full border'>
                    2
                </div>
                <div  className='w-full border'>
                    3
                </div>
            </div>

        </section>
    )
}

export default Projects;