import { useState } from "react";
import useProvider from "../../../Hook/useProvider";
import "./Abouts.css";

const Abouts = () => {
    const { theme } = useProvider();
    const [seemore, setSeemore] = useState(false);

    
    const aboutDetails = "Hello! I'm Protap Saha. I'm Mern Stack web developer. I study on CSE.";
    return (
        // css>>> #abouts 
        <div className={`w-[100%] h-[100%] relative py-10 px-[5%] ${theme === 'colorblind' ? "bg-[#2f0c34]" : "bg-[#121b27]"}`} id="abouts">
            {/* css>>> #abouts h1 */}
            <h1 className={`text-[3rem] text-[#fff] font-[500] tracking-[1px] text-center`}>About
                <span className={`text-[#fff] absolute ml-2`}>me</span>
                <span className="textwaveanimate absolute ml-2">me</span>
            </h1>
            {/* css>>> #abouts .profile_img */}
            <div className="w-[250px] h-[250px] mt-[3rem] mb-[1rem] mx-auto flex items-center justify-center relative">
                {/* css>>> #abouts .profile_img img */}
                <img className={`w-[90%] h-[90%] rounded-[50%] border-[.2rem] ${theme === 'colorblind' ? "border-[#a92661]" : "border-[#92b3e48c]"}`} src="https://i.ibb.co/XkKdSSh/developer-photo.png" />
                {/* css>>> #abouts .profile_img .img_outlet_circle_running */}
                <span className={`circle_animate absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] w-[100%] h-[100%] rounded-[50%] border-[.2rem] border-l-transparent border-r-transparent ${theme === 'colorblind' ? "border-t-[#a92661] border-b-[#a92661]" : "border-t-[#92b3e48c] border-b-[#92b3e48c]"}`}></span>
                {/* <span className="img_outlet_circle_running"></span> */}
            </div>
            {/* css>>> .about_details */}
            <div className={`mt-8`}>
                {/* css>>> .about_details h1 */}
                <h1 className="text-[2rem] font-[500] text-[#fff] text-left mb-[.5rem]">Mern Stack Developer!</h1>
                {/* css>>> .about_details p */}
                <p className={`text-[1rem] font-[400] tracking-[1px] text-[#fff]`}>
                    {
                        seemore ? aboutDetails : aboutDetails.slice(0, 200)
                    }
                    {
                        aboutDetails.length > 100 && (
                            <span className="hover:text-[#448fff] cursor-pointer" onClick={() => setSeemore(!seemore)}> . . . {seemore ? "less more" : "see more"}</span>
                        )
                    }
                </p>
            </div>
        </div>
    );
};

export default Abouts;