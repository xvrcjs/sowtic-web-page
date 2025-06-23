import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { pageview } from '../utils/ga';

// Initialize Google Analytics (Universal Analytics style)
ReactGA.initialize('UA-XXXXXXXXX-X');

const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    const { pathname, search } = location;
    ReactGA.pageview(pathname + search);
    // Alternative gtag-based tracking
    pageview(pathname + search);
  }, [location]);
};

export default usePageTracking;
