import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../../src/Pages/Contact/Contact";
import Descripo from "../../src/Pages/Home/Projects/Descripo/Descripo";
import Gallery from "../../src/Pages/Home/Projects/Gallery/Gallery";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            // {
            //     path: "projects",
            //     element:
            // },
            // {
            //     path: "About_me",
            //     element:
            // },
            {
                path: "contact_me",
                element: <Contact />
            },
            {
                path: "descripo/:id/:name",
                element: <Descripo />,
                loader: ({ params }) => fetch(`https://prodevsite.vercel.app/projects/${params.id}/${params.name}`)
            },
            {
                path: "gallery/:id/:name",
                element: <Gallery />,
                loader: ({ params }) => fetch(`https://prodevsite.vercel.app/projects/${params.id}/${params.name}`)
            }
        ]
    }
]);

export default router;