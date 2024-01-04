import { useEffect, useState } from "react";
import { LiaLocationArrowSolid } from "react-icons/lia";
import useProvider from "../../Hook/useProvider";

const GoTop = () => {
    const { theme } = useProvider();
    const [isTop, setIsTop] = useState(false);

    const handleWindowScrolling = () => {
        if (window.scrollY > 600) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleWindowScrolling);
        return () => {
            window.removeEventListener('scroll', handleWindowScrolling)
        }
    }, []);

    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div onClick={handleGoTop} className={`fixed left-[10px] z-10 flex items-center justify-center w-[3rem] h-[3rem] rounded-lg cursor-pointer transition duration-[.5s] ease-in active:scale-[.8] ${isTop ? "bottom-[180px]" : "-bottom-[100px]"} ${theme === 'colorblind' ? "bg-[#5a198b]" : "bg-[#360f54]"}`} >
            <LiaLocationArrowSolid className="text-[2.5rem] text-[#fff]" />
        </div>
    );
};

export default GoTop;