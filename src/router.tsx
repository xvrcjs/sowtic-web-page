import {
    createBrowserRouter,
    //createHashRouter,
} from "react-router-dom";
import {Layout, Home, RemoteAssistant, SmartRutines, ImageComputing, InventaryControl } from "./pages/index.ts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/remote-assistant",
                element: <RemoteAssistant />
            },
            {
                path: "/smart-rutines",
                element: <SmartRutines />
            },
            {
                path: "/image-computing",
                element: <ImageComputing />
            },
            {
                path: "/inventary-control",
                element: <InventaryControl />
            }
        ]
    },
], {
    future: {
        v7_startTransition: true,
    },
});
