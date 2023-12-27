import React from "react";
import Icon from "./footerIcon";
import ContactInfo from "./contactPersonInfo";

function Contact(){
    return <footer class="p-4  md:p-8 lg:p-10 bg-black " >
                <div class="mx-auto max-w-screen-xl text-center ">
                    <a class="flex justify-center items-center text-5xl text-[#c8c8c8] font-Barlow" >
                        <span class="font-black text-amber-500 transition ease-in-out delay-1">CONTACT</span>   
                    </a>
                    <ul class="flex flex-wrap font-semibold justify-center items-center mb-6 mt-6 gap-38 sm: gap-10 text-white">
                        <ContactInfo name="" phone="team.edc@bitmesra.ac.in"  href="mailto:team.edc@bitmesra.ac.in"/>
                        <ContactInfo name="" phone="president.edc@bitmesra.ac.in" href="mailto:president.edc@bitmesra.ac.in"/>
                    </ul>
                    <Icon />
                    
                </div>
            </footer>
}
export default Contact;