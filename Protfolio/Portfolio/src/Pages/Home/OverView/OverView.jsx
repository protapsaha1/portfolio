import { useState } from "react";
import "./OverViews.css";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import useProvider from "../../../Hook/useProvider";

const OverView = () => {
    const [social_link, setSocial_link] = useState(false);
    const { theme } = useProvider();
    return (
        //  css>>> #overview   //*css>>> .section *
        <div className={`w-[100%] h-[100%] flex px-[5%] justify-between pt-[6rem] pb-[4rem] ${theme === 'colorblind' ? "bg-[#480c43]" : "bg-[#1a2839]"}`} id="overview">
            {/* css>>> #overview .overview_content */}
            <div className="overview_content w-[60%]">
                {/* css>>> #overview .overview_content h2 */}
                {/* css>>> .typing_animation span */} {/* css>>> .typing_animation span::after */}
                <h2 className={`typing_animation text-[2rem] text-[#fff] font-[600] transition duration-[.3s] mb-[1rem]`}>Welcome to <span className={`relative text-[#ddd] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[100%] after:h-[100%] after:border-l-2 after:border-l-[#fff] ${theme === 'colorblind' ? "after:bg-[#480c43]" : "after:bg-[#1a2839]"}`}>pro_dev.site</span></h2>
                {/* css>>> #overview .overview_co ntent h1 */}
                <h1 className={`text-[3rem] text-[#fff] font-[600] transition duration-[.3s]`}>Hi, I am <span>Protap Saha</span></h1>
                {/* css>>> dev_animation */}
                <div className="dev_animation">
                    {/* css>>> .dev_animation h3 */}
                    <h3 data-text="Web Developer">Web Developer</h3>
                </div>
                {/* css>>> #overview .overview_content p */}
                <p className={`text-[1rem] text-[#fff] font-[400] tracking-[1px] pt-[.3rem] pr-[1.5rem] pb-[.3rem] mt-16`}>Hello, My honorable customers , If you need Expert,Responsible , Harder and Passionable developer. I hope and Confident that ,If you give me your want can do it. Thanks to Hire.
                    EXPERTISE IN REACT JS, VITE REACT JS, NEXT JS , REACT COMPONENT , NODE JS , MongoDB , POSTGRESOL
                </p>
                {/* css>>> .hire_contact_links */}
                <div className="flex mt-[2.5rem] items-center gap-[.8rem]">
                    {/* hire_btn */}
                    {/* css>>> .hire_contact_links a*/}
                    <Link to="/contact_me" className={`text-[1rem] text-[#ffff] font-[400] tracking-[1px] py-2 px-[.8rem] relative rounded-[.2rem] z-[1] overflow-hidden duration-[1.5s] transition active:scale-[.8] ${theme === 'colorblind' ? "bg-[#9c267c] hover:bg-[#932576]" : "bg-[#213e66] hover:bg-[#1f4985]"}`} >Hire me</Link>

                    {/* css>>> .social_link_animate */}
                    <div onClick={() => setSocial_link(!social_link)} className={`text-[1rem] text-[#ffff] font-[400] tracking-[1px] py-2 px-[.8rem] relative rounded-[.2rem] z-[1] overflow-hidden cursor-pointer duration-[1.5s] transition ${social_link ? "translate-x-[290px]" : "translate-x-[0]"} ${theme === 'colorblind' ? "bg-[#9c267c] hover:bg-[#932576]" : "bg-[#213e66] hover:bg-[#1f4985]"}`}>Social link</div>
                    {/* css>>> .social_links */}
                    <div className={`flex items-center gap-2 ${social_link ? "-translate-x-[120px] scale-[1] block transition-[transform_1s_display_1.5s_]" : "scale-[0] hidden translate-x-[0px] transition-[transform_1s_display_1.5s_]"}`}>
                        {/* css>>> .social_links .icon */}
                        {/* css>>> .social_links .fb */}
                        <Tippy content="facebook"><a className="w-[2.5rem] h-[2.5rem] border-[1px] border-[#fff] hover:border-0 bg-transparent hover:bg-[#ffffff13] text-[1.4rem] rounded-[50%] flex items-center justify-center duration-[.5s] transition group" href="https://www.facebook.com/profile.php?id=100086889346943" ><FiFacebook className="text-[#fff] group-hover:text-[#5974ce] group-hover:scale-[1.2] group-hover:duration-[.5s]" /></a></Tippy>
                        {/* css>>> .social_links .insta */}
                        <Tippy content="instagram"><a className="w-[2.5rem] h-[2.5rem] border-[1px] border-[#fff] hover:border-0 bg-transparent hover:bg-[#ffffff13] text-[1.4rem] rounded-[50%] flex items-center justify-center duration-[.5s] transition group" href="" ><FiInstagram className="text-[#fff] group-hover:text-[#ff3300] group-hover:scale-[1.2] group-hover:duration-[.5s]" /></a></Tippy>
                        {/* css>>> .social_links .tube */}
                        <Tippy content="Youtube"><a className="w-[2.5rem] h-[2.5rem] border-[1px] border-[#fff] hover:border-0 bg-transparent hover:bg-[#ffffff13] text-[1.4rem] rounded-[50%] flex items-center justify-center duration-[.5s] transition group" href="https://youtube.com/@protapsaha09?si=NiMrIZ7wZRW3TD_3" ><FiYoutube className="text-[#fff] group-hover:text-[red] group-hover:scale-[1.2] group-hover:duration-[.5s]" /></a></Tippy>
                        {/* css>>> .social_links .wt-apps */}
                        <Tippy content="whatsapp"><a className="w-[2.5rem] h-[2.5rem] border-[1px] border-[#fff] hover:border-0 bg-transparent hover:bg-[#ffffff13] text-[1.4rem] rounded-[50%] flex items-center justify-center duration-[.5s] transition group" href="whatsapp:contact=01824599286@s.whatsapp.com&message=" ><FaWhatsapp className="text-[#fff] group-hover:text-[#4aa142] group-hover:scale-[1.2] group-hover:duration-[.5s]" /></a></Tippy>
                        {/* css>>> .hire_contact_links .linkedin */}
                        <Tippy content="linkedin"><a className="w-[2.5rem] h-[2.5rem] border-[1px] border-[#fff] hover:border-0 bg-transparent hover:bg-[#ffffff13] text-[1.4rem] rounded-[50%] flex items-center justify-center duration-[.5s] transition group" href="https://www.linkedin.com/in/protap-saha-38508a276/" ><AiOutlineLinkedin className="text-[#fff] group-hover:text-[#5367aa] group-hover:scale-[1.2] group-hover:duration-[.5s]" /></a></Tippy>
                        {/* css>>> .hire_contact_links .github:hover */}
                        <Tippy content="github" ><a className="w-[2.5rem] h-[2.5rem] border-[1px] border-[#fff] hover:border-0 bg-transparent hover:bg-[#ffffff13] text-[1.4rem] rounded-[50%] flex items-center justify-center duration-[.5s] transition group" href="https://github.com/protapsaha1" ><AiOutlineGithub className="text-[#fff] group-hover:text-[#0a0b10] group-hover:scale-[1.2] group-hover:duration-[.5s]" /></a></Tippy>
                    </div>
                    <a href="../../../../public/PDF/Job-CV.pdf" download="protap Resume protap.pdf" className={`text-[1rem] text-[#ffff] font-[400] tracking-[1px] py-2 px-[.8rem] relative rounded-[.2rem] z-[1] overflow-hidden duration-[1.5s] transition active:scale-[.8] border-[1px] flex items-center gap-3 group ${theme === 'colorblind' ? "border-[#9c267c] bg-transparent" : "border-[#213e66] bg-transparent"}`}>Resume <span className="scale-0 group-hover:duration-[.5s] group-hover:scale-[1]"><FaDownload /></span></a>
                </div>
            </div>
            <div className={`
                    w-[450px] h-[450px] rounded-[50%] 
                    relative before:content-[''] 
                    before:absolute before:border-[5px]
                    before:top-[0px] before:left-[0px]
                    before:right-[0px] before:bottom-[0px]
                    before:rounded-[50%] bg-[bganimate]
                    before:shadow-[0_0_50px_#0f0,_inset_0_0_50px_#0f0]
                    before:animate-[circleanimatelight_5s_linear_infinite]
                    ${theme === 'colorblind' ? "bg-[#68115c8b] before:border-[#ffffff]" : "bg-[#203045] before:border-[#ffffff]"}
                    `}>
                {/* <ul className={`
                    list-none absolute w-[35px] h-[35px]
                    bottom-0 left-[10vw] opacity-0
                    bg-gradient-to-l from-[#0b6d97] via-transparent to-transparent 
                    animate-[backanimate_15s_linear_infinite]
                    `}>
                    <li className="left-[37vw] delay-[2s]"></li>
                    <li className="left-[25vw] delay-[4s]"></li>
                    <li className="left-[60vw] delay-[6s]"></li>
                    <li className="left-[75vw] delay-[4s]"></li>
                    <li className="left-[70vw] delay-[2s]"></li>
                </ul> */}

                <img className="w-[100%] h-[100%] bg-center bg-cover rounded-[50%]" src="https://i.ibb.co/XkKdSSh/developer-photo.png" alt="" />
            </div>
        </div>
    );
};

export default OverView;