import { useLoaderData } from "react-router-dom";
import "./Descripo.css";
import useProvider from "../../../../Hook/useProvider";
import { BiLeftArrowAlt } from "react-icons/bi";

const Descripo = () => {
    const { bgTheme } = useProvider();
    const data = useLoaderData();
    const { name, gallery, description, features } = data;

    const backfrompage = () => {
        window.history.back();
    };

    return (
        <div className="descripo_container">
            <div className="video">
                <span className="bk_pg_despo" onClick={backfrompage}><BiLeftArrowAlt /></span>
                <iframe src={gallery?.video} ></iframe>
            </div>
            <div className="description">
                <h1>{name}</h1>
                <p className={bgTheme === "darkskyblue" ? "textdark" : bgTheme === "dark" ? "textlight" : "textdarkskyblue"}>{description}</p>
                <div className="features">
                    <h2 className={bgTheme === "darkskyblue" ? "fetitledark" : bgTheme === "dark" ? "fetitlelight" : "fetitledarkskyblue"}>Project Site Features</h2>
                    <ul>
                        {features &&
                            features.map((ft, i) => <li key={i} className={bgTheme === "darkskyblue" ? "listdark" : bgTheme === "dark" ? "listlight" : "listdarkskyblue"}>{ft}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Descripo;