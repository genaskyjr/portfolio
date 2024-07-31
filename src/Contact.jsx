function Contact(){
    return(
        <section id="contact" className="animate-fade-right animate-once animate-duration-1000 animate-delay-100 mt-12 p-5 bg-[#424C6F] border rounded-lg border-0 mx-2 max-w-screen-lg
        sm:mx-12 md:mx-24 lg:mx-36 xl:mx-auto">
            <p className="text-center font-outfit font-semibold mb-4 text-lg
            sm:text-2xl md:text-3xl lg:text-4xl">Contact</p>

            <p className="text-center font-outfit font-semibold mb-4 text-sm
            sm:text-base md:text-lg lg:text-xl">Let's crush some projects together! 🚀🔥</p>
            
            <form method="post" action="https://getform.io/f/bgdyvjpa" className="grid gap-1.5 font-roboto text-sm text-black sm:grid-cols-2 mx-auto w-[85%] sm:w-[75%] lg:w-[65%]">

                    <input name="name" required className="w-full rounded-md p-2" type="text" placeholder="Your name"/>
                    <input name="email" required className="w-full rounded-md p-2" type="email" placeholder="Your email"/>
                    <textarea name="message"  required className="w-full rounded-md p-2 sm:col-span-2" type="text" placeholder="Your Message.."/>
                    <button type="submit" className="hover:opacity-70 sm:col-span-2 rounded-lg border-x-emerald-50 border-2 text-white p-2 w-[50%] mx-auto">Send Message</button>

            </form>

        </section>
    )
}

export default Contact;