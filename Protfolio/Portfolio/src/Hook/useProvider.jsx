import { useContext } from "react";
import { provide } from "../Global/Context";

const useProvider = () => {
    const provider = useContext(provide);
    return provider;
};

export default useProvider;