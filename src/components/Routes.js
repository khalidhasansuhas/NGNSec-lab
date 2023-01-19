import { createBrowserRouter } from "react-router-dom";
import Biography from "./Biography";
import Home from "./Home";
import Lab from "./Lab";
import Main from "./Main";
import Photos from "./Photos";
import Publications from "./Publications";
import Work from "./Work";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/biography',
                element:<Biography></Biography>
            },
            {
                path:'/work',
                element:<Work></Work>
            },
            {
                path:'/lab',
                element:<Lab></Lab>
            },
            {
                path:'/publications',
                element:<Publications></Publications>
            },
            {
                path:'/photos',
                element:<Photos></Photos>
            },
        ]
    }
])
export default router;