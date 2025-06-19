import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

/**
 * Scrolls the window to top on route change.
 *
 * @param children - wrapped elements.
 * @returns JSX.Element children wrapper.
 */
const ScrollToTop = ({ children }: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
