import usePageTracking from './hooks/usePageTracking';
import Layout from './pages/layouts/Layout';

/**
 * Demo application component.
 *
 * @returns JSX.Element - rendered demo.
 * @example
 * ```tsx
 * <App />
 * ```
 */
function App(): JSX.Element {
  usePageTracking();
  return <Layout />;
}

export default App
