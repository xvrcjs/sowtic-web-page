import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

// Initialize Universal Analytics
ReactGA.initialize('UA-11390972495-1');

const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    const { pathname, search } = location;
    const page = pathname + search;
    ReactGA.pageview(page);
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-PS883B5CL3', { page_path: page });
    }
  }, [location.pathname, location.search]);
};

export default usePageTracking;
