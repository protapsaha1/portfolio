// import useProvider from "../../../../../Hook/useProvider";
import { useLoaderData } from "react-router-dom";
import "./Gallery.css";
import { BiExpand, BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import useProvider from "../../../../Hook/useProvider";


const Gallery = () => {
    const [photomodel, setPhotomodel] = useState(false);
    const [currPhoto, setCurrPhoto] = useState("");
    const gallerydata = useLoaderData();
    const { gallery } = gallerydata;
    const { video, photos } = gallery;
    const { bgTheme } = useProvider();

    const tapPhoto = (getphotosrc) => {
        setCurrPhoto(getphotosrc);
        setPhotomodel(true);
    };

    const backfrompage = () => {
        window.history.back();
    };

    return (
        <>
            <div className={photomodel === true ? "photomodel open" : "photomodel"}>
                <AiOutlineClose onClick={() => setPhotomodel(false)} />
                <img src={currPhoto} alt="" />
            </div>
            
            <span className={`bk_pg ${bgTheme === "darkskyblue" ? "bk_pgdark" : bgTheme === "dark" ? "bk_pglight" : "bk_pgdarkskyblue"}`} onClick={backfrompage}><BiLeftArrowAlt /></span>
            <div className="gallery_container">
                <div className="gall_video_content">
                    <iframe src={video} allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
                <div className="video_container">
                    <iframe src="../../../../../../public/image/companies_logo/0827.mp4" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    {/* <source src="" type="video/mp4"></source> */}
                    {/* <iframe src="../../../../../../public/image/companies_logo/0827.mp4" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <iframe src="../../../../../../public/image/companies_logo/0827.mp4" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <iframe src="../../../../../../public/image/companies_logo/0827.mp4" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <iframe src="../../../../../../public/image/companies_logo/0827.mp4" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
                </div>
                <div className="photo_container">
                    {photos &&
                        photos.map((ph, i) => <div className="imgcontainer" key={i}>
                            <img src={ph} alt="" />
                            <span className="view_img" onClick={() => tapPhoto(ph)}><BiExpand /></span>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Gallery;