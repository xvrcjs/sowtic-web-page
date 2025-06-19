import { Outlet } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "../../components";
import ScrollToHashElement from "../../components/shared/ScrollToHasElement";

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