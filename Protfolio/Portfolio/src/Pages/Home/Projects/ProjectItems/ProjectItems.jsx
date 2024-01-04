import { Link } from "react-router-dom";
import "./ProjectItems.css";
import { LuExternalLink } from "react-icons/lu";
// import useProvider from "../../../../Hook/useProvider";
const ProjectItems = ({ project }) => {
    const { _id, name, image, description, live_link, git_link } = project;
    // const { bgTheme } = useProvider();
    // w-[100%] h-[400px] py-[2rem] px-[1rem] bg-[#ffffff] relative flex items-center justify-center duration-[.5s] ease-in-out overflow-hidden rounded-[.3rem] z-[1] shadow-[0_0_0_0.5] hover:translate-y-[20px]
    return (
        <>
            <div className="project_Card">
                <div className="card_content">
                    <img src={image} alt="" />
                    <div className="project_content">
                        <a href={live_link}><LuExternalLink /> view Link</a>
                        <h1>{name}</h1>
                    </div>
                </div>
                <div className={`project_info`}>
                    <p>{description.lenght > 20 ? <span>{description}</span> : <Link to={`/descripo/${_id}/${name}`}><span>{description.slice(0, 40)}</span></Link>}</p>
                    <div className="g_code_gall_site">
                        <div className="outercircle btn_click">
                            <a href={git_link}>git code</a>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="outercircle btn_click">
                            <Link to={`/gallery/${_id}/${name}`}>Gallery</Link>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectItems;