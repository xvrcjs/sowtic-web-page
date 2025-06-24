import { Outlet } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "../../components";
import ScrollToHashElement from "../../components/shared/ScrollToHasElement";

/**
 * Layout de la aplicación con cabecera y pie.
 *
 * @returns JSX.Element contenedor de la vista.
 */
const Layout = () => {
    return (
        <>
            <ScrollToTop />
            <ScrollToHashElement />
            <Header />
            <Outlet />            
            <Footer></Footer>
        </>
    )
}

export default Layout

