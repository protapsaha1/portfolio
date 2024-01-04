import { Outlet, useLocation } from "react-router-dom";
import Header from "../../src/Pages/Shared/Header/Header";
import Footer from "../../src/Pages/Shared/Footer/Footer";
// import useProvider from "../Hook/useProvider";

const Main = () => {
    // const { bgTheme, theme } = useProvider();
    // ${theme === "darkskyblue" ? "bg-[rgb(18, 42, 57)]" : theme === "dark" ? "bg-[#000]" : "bg-[#fff]"}
    const loc = useLocation();
    const galldes = loc.pathname.includes("/descripo") || loc.pathname.includes("/gallery")||loc.pathname.includes("/contact_me")
    return (
        <>
            {galldes || <Header />}
            <div className={`xl:max-w-[1900px] min-[320px]:w-[100%] xl:mx-auto min-[320px]:mx-0 duration-[.8s] transition`}>
                <Outlet />
            </div>
            {galldes || <Footer />}
        </>
    );
};

export default Main;