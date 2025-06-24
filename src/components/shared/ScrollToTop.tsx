import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

/**
 * Componente que realiza un scroll suave al inicio en cada cambio de ruta.
 *
 * @param props.children - elementos envueltos por el proveedor
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
