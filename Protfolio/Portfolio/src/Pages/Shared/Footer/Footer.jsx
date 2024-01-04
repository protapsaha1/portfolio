import useProvider from "../../../Hook/useProvider";
// import { RiMoonClearFill } from "react-icons/ri";
import { IoMdCloudyNight, IoMdColorPalette } from "react-icons/io";
// import "./Footer.css";

const Footer = () => {
    const {
        setToggleTheme,
        theme
    } = useProvider();


    return (
        <footer className={`w-[100%] h-[4rem] flex items-center justify-center gap-5 ${theme === 'colorblind' ? "bg-[#46135e]" : "bg-[#1c2d3e]"}`}>
            <div className="colorContainer" onClick={setToggleTheme}>
                {theme === "colorblind"
                    ?
                    <span className="text-[2rem] text-[#c03eef] cursor-pointer"><IoMdColorPalette /></span>
                    :
                    <span className="text-[2rem] text-[#ffffff] cursor-pointer"><IoMdCloudyNight /></span>
                }
            </div>
            <p className="text-[1rem] text-center font-[400] tracking-[1px] text-[#fff]">@ portfolio pro_dev.site</p>
        </footer>
    );
};

export default Footer;