import useProvider from "../../../Hook/useProvider";
import "../../Portfolio/Portfolio_style.css";
import "./Skills.css";
const Skills = () => {
    const { bgTheme } = useProvider();
    return (
        //  skills section 
        // css>>> .section 
        // css>>> #skills 
        <div className="section" id="skills">
            <div className="skills">
                {/* css>>> #skills .skills h1 */} {/* css>>> #skills .skills h1 span */}
                <h1 className={bgTheme === "darkskyblue" ? "skillheaderdark" : bgTheme === "dark" ? "skillheaderlight" : "skillheaderdarkskyblue"}>My <span>Skills</span></h1>
                {/* css>>> .skills .skills_row */}
                <div className="skills_row">
                    {/* css>>> .skills_row .skills_column */}
                    <div className="skills_column">
                        {/* css>>> .skills_column .title */}
                        {/* <h2 className="title">Coding Skills</h2> */}
                        <div className="skills_contain">
                            {/* css>>> .skills_contain .skills_content */}
                            <div className="skills_content">
                                <div className="progress">
                                    {/* css>>> .progress h3 */} {/* css>>> .progress h3 span */}
                                    <h3 className={bgTheme === "darkskyblue" ? "progressdark" : bgTheme === "dark" ? "progresslight" : "progressdarkskyblue"}>HTML <span>80%</span></h3>
                                    {/* css>>> .progress_bar */}
                                    <div className="progress_bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3 className={bgTheme === "darkskyblue" ? "progressdark" : bgTheme === "dark" ? "progresslight" : "progressdarkskyblue"}>CSS <span>40%</span></h3>
                                    <div className="progress_bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3 className={bgTheme === "darkskyblue" ? "progressdark" : bgTheme === "dark" ? "progresslight" : "progressdarkskyblue"}>JAVASCRIPT <span>60%</span></h3>
                                    <div className="progress_bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3 className={bgTheme === "darkskyblue" ? "progressdark" : bgTheme === "dark" ? "progresslight" : "progressdarkskyblue"}>C++ <span>10%</span></h3>
                                    <div className="progress_bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3 className={bgTheme === "darkskyblue" ? "progressdark" : bgTheme === "dark" ? "progresslight" : "progressdarkskyblue"}>DEBUGING <span>70%</span></h3>
                                    <div className="progress_bar"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills_column">
                        {/* <h2 className="title">Coding Skills</h2> */}
                        <div className="skills_contain">
                            <div className="skills_content">
                                <div className="progress">
                                    <h3 className={bgTheme === "darkskyblue" ? "progressdark" : bgTheme === "dark" ? "progresslight" : "progressdarkskyblue"}>HTML <span>80%</span></h3>
                                    <div className="progress_bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3 className={bgTheme === "darkskyblue" ? "progressdark" : bgTheme === "dark" ? "progresslight" : "progressdarkskyblue"}>CSS <span>40%</span></h3>
                                    <div className="progress_bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3 className={bgTheme === "darkskyblue" ? "progressdark" : bgTheme === "dark" ? "progresslight" : "progressdarkskyblue"}>JAVASCRIPT <span>60%</span></h3>
                                    <div className="progress_bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3 className={bgTheme === "darkskyblue" ? "progressdark" : bgTheme === "dark" ? "progresslight" : "progressdarkskyblue"}>C++ <span>10%</span></h3>
                                    <div className="progress_bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3 className={bgTheme === "darkskyblue" ? "progressdark" : bgTheme === "dark" ? "progresslight" : "progressdarkskyblue"}>DEBUGING <span>70%</span></h3>
                                    <div className="progress_bar"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;