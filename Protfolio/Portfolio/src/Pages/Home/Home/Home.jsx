import OverView from "../OverView/OverView";
import Projects from "../Projects/Projects/Projects";
import About from "../Abouts/Abouts";
import GoTop from "../../../Module/GoTop/GoTop";
import FbmsgChat from "../../../component/FbmsgChat/FbmsgChat";
const Home = () => {
    return (
        <div>
            <OverView />
            <Projects />
            <About />
            <GoTop />
            <FbmsgChat />
        </div>
    );
};

export default Home;