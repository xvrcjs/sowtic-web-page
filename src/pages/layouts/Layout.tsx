import { Outlet } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "../../components";
import ScrollToHashElement from "../../components/shared/ScrollToHasElement";
import usePageTracking from "../../hooks/usePageTracking";

/**
 * Application layout with header and footer.
 *
 * @returns JSX.Element layout container.
 */
const Layout = () => {
    usePageTracking();
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