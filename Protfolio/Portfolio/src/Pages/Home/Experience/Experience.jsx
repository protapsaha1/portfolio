import "../../Portfolio/Portfolio_style.css";
import "./Experience.css";
import useProvider from "../../../Hook/useProvider";

const Experience = () => {
    const { bgTheme } = useProvider();
    return (
        // css>>> .section 
        <div className="section" id="experience">
            <div className="experience">
                <h1 className={`heading ${bgTheme === "darkskyblue" ? "headingdark" : bgTheme === "dark" ? "headinglight" : "headingdarkskyblue"}`}>
                    <span>E</span>
                    <span>x</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                    <span>i</span>
                    <span>e</span>
                    <span>n</span>
                    <span>c</span>
                    <span>e</span>
                </h1>
                <div className={`container ${bgTheme === "darkskyblue" ? "textdark" : bgTheme === "dark" ? "textlight" : "textdarkskyblue"}`}>
                    <div className="experiences_container left_experiences_container">
                        <img src="https://i.ibb.co/0tjWdMM/logoconpany.png" alt="" />
                        <div className="text_content_box">
                            <h1>It House</h1>
                            <small>2023 - 2025</small>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Culpa reiciendis accusamus fugiat repellat
                                porro perspiciatis saepe soluta explicabo provident
                                quod.
                            </p>
                            <span className="left_content_arrow"></span>
                        </div>
                    </div>
                    <div className="experiences_container right_experiences_container">
                        <img src="https://i.ibb.co/0tjWdMM/logoconpany.png" alt="" />
                        <div className="text_content_box">
                            <h1>It House</h1>
                            <small>2023 - 2025</small>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Culpa reiciendis accusamus fugiat repellat
                                porro perspiciatis saepe soluta explicabo provident
                                quod.
                            </p>
                            <span className="right_content_arrow"></span>
                        </div>
                    </div>
                    <div className="experiences_container left_experiences_container">
                        <img src="https://i.ibb.co/0tjWdMM/logoconpany.png" alt="" />
                        <div className="text_content_box">
                            <h1>It House</h1>
                            <small>2023 - 2025</small>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Culpa reiciendis accusamus fugiat repellat
                                porro perspiciatis saepe soluta explicabo provident
                                quod.
                            </p>
                            <span className="left_content_arrow"></span>
                        </div>
                    </div>
                    <div className="experiences_container right_experiences_container">
                        <img src="https://i.ibb.co/0tjWdMM/logoconpany.png" alt="" />
                        <div className="text_content_box">
                            <h1>It House</h1>
                            <small>2023 - 2025</small>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Culpa reiciendis accusamus fugiat repellat
                                porro perspiciatis saepe soluta explicabo provident
                                quod.
                            </p>
                            <span className="right_content_arrow"></span>
                        </div>
                    </div>
                    {/* <div className="experiences_container left_experiences_container">
                    <img src="https://i.ibb.co/0tjWdMM/logoconpany.png" alt="" />
                    <div className="text_content_box">
                        <h1>It House</h1>
                        <small>2023 - 2025</small>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa reiciendis accusamus fugiat repellat
                            porro perspiciatis saepe soluta explicabo provident
                            quod.
                        </p>
                        <span className="left_content_arrow"></span>
                    </div>
                </div>
                <div className="experiences_container right_experiences_container">
                    <img src="https://i.ibb.co/0tjWdMM/logoconpany.png" alt="" />
                    <div className="text_content_box">
                        <h1>It House</h1>
                        <small>2023 - 2025</small>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa reiciendis accusamus fugiat repellat
                            porro perspiciatis saepe soluta explicabo provident
                            quod.
                        </p>
                        <span className="right_content_arrow"></span>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
    );
};

export default Experience;