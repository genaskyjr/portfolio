function Contact(){
    return(
        <section className="animate-fade-right animate-once animate-duration-1000 animate-delay-100 mt-12 p-5 bg-[#424C6F] border rounded-lg border-0 mx-2 max-w-screen-lg
        sm:mx-12 md:mx-24 lg:mx-36 xl:mx-auto">
            <p className="text-center font-outfit font-semibold mb-4 text-lg
            sm:text-2xl md:text-3xl lg:text-4xl">Contact</p>

            <p className="text-center font-outfit font-semibold mb-4 text-sm
            sm:text-2xl md:text-3xl lg:text-4xl">Let's crush some projects together! 🚀🔥</p>

            <div className=" grid gap-1.5 font-roboto text-sm text-black">
                <input className="w-full rounded-md p-2 " type="text" placeholder="Your name"/>
                <input className="w-full rounded-md p-2" type="email" placeholder="Your email"/>
                <textarea className="w-full rounded-md p-2" type="TEXT" placeholder="Your Message.."/>

                

            </div>
           

                   

        </section>
    )
}

export default Contact;