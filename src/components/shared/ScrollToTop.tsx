import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  // Se permite omitir children para usar el componente como wrapper vacío
  children?: React.ReactNode;
}

/**
 * ScrollToTop component.
 * Smoothly scrolls to the top on every route change.
 *
 * @param props.children - elements wrapped by the provider
 * @example
 * <BrowserRouter>
 *   <ScrollToTop>
 *     <AppRoutes />
 *   </ScrollToTop>
 * </BrowserRouter>
 */
const ScrollToTop = ({ children }: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
