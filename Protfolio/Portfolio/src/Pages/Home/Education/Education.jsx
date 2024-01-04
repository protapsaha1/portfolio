import { FcCalendar } from "react-icons/fc";
import "../../Portfolio/Portfolio_style.css";
import "./Education.css";
import useProvider from "../../../Hook/useProvider";

const Education = () => {
    const { bgTheme } = useProvider();
    return (
        //   css>>> #education 
        <div className="section" id="education">
            {/* css>>> #education h1 */}
            {/* css>>> #education h1 span */}
            <h1 className={bgTheme === "darkskyblue" ? "headTitledark" : bgTheme === "dark" ? "headTitlelight" : "headTitledarkskyblue"}>My <span>Degrees</span></h1>
            {/* css>>> .education */}
            <div className="education">
                {/* css>>> .education .education_row */}
                <div className="education_row">
                    {/* css>>> .education_row .education_column */}
                    <div className="education_column">
                        {/* css>>> .education_column .heading  */}
                        {/* <h2 className="heading">Education</h2> */}
                        <div className="education_contain">
                            <div className="education_content">
                                <div className="content">
                                    {/* css>>> .education_content .content .edu_years span */} {/* css>>> .education_content .content .edu_years svg */}
                                    <div className="edu_years"><FcCalendar /><span>2021 - Pracent</span></div>
                                    {/* css>>> .education_content .content .institute */}
                                    <h3 className={`institute ${bgTheme === "darkskyblue" ? "institutedark" : bgTheme === "dark" ? "institutelight" : "institutedarkskyblue"}`}>Dhaka Polytechnic Institute</h3>
                                    {/* css>>> .education_content .content .edu_describtion */}
                                    <p className={`edu_describtion ${bgTheme === "darkskyblue" ? "edu_describtiondark" : bgTheme === "dark" ? "edu_describtionlight" : "edu_describtiondarkskyblue"}`}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Impedit blanditiis neque illum quis commodi exercitationem
                                        pariatur inventore sunt ipsum unde?
                                    </p>
                                </div>
                            </div>
                            <div className="education_content">
                                <div className="content">
                                    <div className="edu_years"><FcCalendar /><span>2021 - Pracent</span></div>
                                    <h3 className={`institute ${bgTheme === "darkskyblue" ? "institutedark" : bgTheme === "dark" ? "institutelight" : "institutedarkskyblue"}`}>Dhaka Polytechnic Institute</h3>
                                    <p className={`edu_describtion ${bgTheme === "darkskyblue" ? "edu_describtiondark" : bgTheme === "dark" ? "edu_describtionlight" : "edu_describtiondarkskyblue"}`}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Impedit blanditiis neque illum quis commodi exercitationem
                                        pariatur inventore sunt ipsum unde?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="education_column">
                        <div className="education_contain">
                            <div className="education_content">
                                <div className="content">
                                    <div className="edu_years"><FcCalendar /><span>2021 - Pracent</span></div>
                                    <h3 className={`institute ${bgTheme === "darkskyblue" ? "institutedark" : bgTheme === "dark" ? "institutelight" : "institutedarkskyblue"}`}>Dhaka Polytechnic Institute</h3>
                                    <p className={`edu_describtion ${bgTheme === "darkskyblue" ? "edu_describtiondark" : bgTheme === "dark" ? "edu_describtionlight" : "edu_describtiondarkskyblue"}`}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Impedit blanditiis neque illum quis commodi exercitationem
                                        pariatur inventore sunt ipsum unde?
                                    </p>
                                </div>
                            </div>
                            <div className="education_content">
                                <div className="content">
                                    <div className="edu_years"><FcCalendar /><span>2021 - Pracent</span></div>
                                    <h3 className={`institute ${bgTheme === "darkskyblue" ? "institutedark" : bgTheme === "dark" ? "institutelight" : "institutedarkskyblue"}`}>Dhaka Polytechnic Institute</h3>
                                    <p className={`edu_describtion ${bgTheme === "darkskyblue" ? "edu_describtiondark" : bgTheme === "dark" ? "edu_describtionlight" : "edu_describtiondarkskyblue"}`}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Impedit blanditiis neque illum quis commodi exercitationem
                                        pariatur inventore sunt ipsum unde?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;