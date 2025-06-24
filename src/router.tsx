import {
    createBrowserRouter,
    //createHashRouter,
    RouterProvider
} from "react-router-dom";
import {Layout, Home, RemoteAssistant, SmartRutines, ImageComputing, InventaryControl } from "./pages/index.ts";

const router = createBrowserRouter([
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

/**
 * Contenedor del proveedor de React Router.
 *
 * @returns JSX.Element componente de rutas.
 */
function Router() {
    return(
        <RouterProvider router={router} />
    )
}

export default Router