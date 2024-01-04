import { useQuery } from "@tanstack/react-query";

const useProjectsDB = () => {
    const querydata = async () => {
        const res = await fetch(" https://prodevsite.vercel.app/projects");
        return res.json();
    };
    const { data: projectdb = [] } = useQuery({
        queryKey: ["project"],
        queryFn: querydata,
    })
    return { projectdb };
};

export default useProjectsDB;
// https://prodevsite.vercel.app/projects