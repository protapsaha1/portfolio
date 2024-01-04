import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdCloudyNight, IoMdColorPalette } from "react-icons/io";
import useProvider from "../../../Hook/useProvider";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    const [animateLink, setAnimateLink] = useState(false);
    const [drawerMenu, setDrawerMenu] = useState(false);
    const [scrollPageDown, setScrollPageDown] = useState(false);
    const {
        setToggleTheme,
        theme
    } = useProvider();

    const handleAnimateLink = () => {
        setAnimateLink(true);
        setTimeout(() => {
            setAnimateLink(false);
        }, 1000);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleHeaderScrolling);
        return () => {
            window.removeEventListener("scroll", handleHeaderScrolling);
        }
    }, []);

    const handleHeaderScrolling = () => {
        const scrollRange = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (scrollRange >= 5) {
            setScrollPageDown(true);
        } else {
            setScrollPageDown(false);
        }

    };

    

    return (
        <div className={`fullheader transition duration-[.5s] ease-linear ${scrollPageDown === true ? (theme === 'colorblind' ? "bg-[#671442]" : "bg-[#1e2f42]") : "bg-transparent"}`}>
            <div className={`header transition duration-[.5s] ease-linear ${scrollPageDown === true ? (theme === 'colorblind' ? "bg-[#671442]" : "bg-[#1e2f42]") : "bg-transparent"}`}>
                {/* css>>> header .devlogo */} {/* css>>> .devlogo:hover */}
                <div className={`devlogo`}>
                    {/* css>>> header .devlogo>img  */}
                    <div className={`w-[3.5rem] h-[3.5rem] rounded-[50%] flex items-center justify-center duration-[.5s] ${theme === 'colorblind' ? "bg-[#9c1f64]" : "bg-[#23374d]"}`}>
                        <img className="w-[80%] h-[80%] rounded-[50%] bg-[#fff]" src="https://i.ibb.co/XkKdSSh/developer-photo.png" alt="logo" />
                    </div>
                    Pro_dev.site
                </div>
                {/* css>>> .responsive-menu svg */}
                <div>
                    <div className="responsive-menu">
                        <span onClick={() => setDrawerMenu(true)} className={`menubaricon`}><AiOutlineMenuUnfold /></span>
                        <div onClick={() => setDrawerMenu(false)} className={drawerMenu === true ? "drawerdash drawerdashopen" : "drawerdashnone"}>
                            {/* <div className={drawerMenu === true ? "drawermenu opendrawer" : "drawernone" }> */}
                            <div className={`drawermenu ${drawerMenu === true ? "opendrawer" : "drawernone"}`}>
                                <ul>
                                    <div className="menuheader">
                                        <div className="theme" onClick={setToggleTheme}>
                                            {theme === "colorblind"
                                                ?
                                                <span className="text-[2rem] text-[#c03eef] cursor-pointer"><IoMdColorPalette /></span>
                                                :
                                                <span className="text-[2rem] text-[#ffffff] cursor-pointer"><IoMdCloudyNight /></span>
                                            }
                                        </div>
                                        <span onClick={() => setDrawerMenu(false)} ><AiOutlineClose /></span>
                                    </div>
                                    <li><a href="#overview">OverView</a></li>
                                    {/* <li><a href="#skills">Skills</a></li> */}
                                    {/* <li><a href="#experience">Experience</a></li> */}
                                    <li><a href="#projects">projects</a></li>
                                    {/* <li><a href="#education">Education</a></li> */}
                                    <li><a href="#abouts">Abouts</a></li>
                                    <li><Link to="/contact"> Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <AiOutlineMenuFold /> */}
                    </div>
                    {/* css>>> nav>a */} {/* css>>> nav>a:hover */}
                    <nav>
                        <a onClick={handleAnimateLink} className={animateLink === true ? "animate" : ""} href="#overview">OverView</a>
                        {/* <a onClick={handleAnimateLink} className={animateLink === true ? "animate" : ""} href="#skills">Skills</a> */}
                        <a onClick={handleAnimateLink} className={animateLink === true ? "animate" : ""} href="#projects">projects</a>
                        {/* <a onClick={handleAnimateLink} className={animateLink === true ? "animate" : ""} href="#education">Education</a> */}
                        <a onClick={handleAnimateLink} className={animateLink === true ? "animate" : ""} href="#abouts">Abouts</a>
                        <Link onClick={handleAnimateLink} className={animateLink === true ? "animate" : ""} to="/contact_me" >Contact</Link>
                    </nav >
                </div>
            </div>
        </div>
    );
};

export default Header;