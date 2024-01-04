import ProjectItems from "../ProjectItems/ProjectItems";
import useProvider from "../../../../Hook/useProvider";
import useProjectsDB from "../../../../Hook/useProjectsDB";
import "./Projects.css";
const Projects = () => {
    const { theme } = useProvider();
    const { projectdb } = useProjectsDB();
    console.log(projectdb)
    return (
        <div className={`w-[100%] h-[100%] py-[1rem] px-[5%] ${theme==='colorblind'?"bg-[#aaa]":"bg-[#182333]"}`} id="projects">
            <h1 className={`text-[3rem] font-[600] text-[#fff] text-center tracking-[1px]`}>Projects</h1>
            {/* <div className="filter_sort_project">
                <button className="sort_btn">React.js</button>
                <button className="sort_btn">Next.js</button>
                <button className="sort_btn">Tailwind Css</button>
                <button className="sort_btn">Bootstrap Css</button>
                <button className="sort_btn">Bootstrap Css</button>
                <button className="sort_btn">Bootstrap Css</button>
            </div> */}
            <div className="w-[100%] grid grid-cols-4 gap-3 pt-10">

                {projectdb &&
                    projectdb.map((project) =>
                        <ProjectItems key={project._id} project={project} />
                    )
                }
            </div>
            <div className="pro_exp_to_pro">

            </div>
        </div>
    );
};

export default Projects;