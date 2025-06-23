import usePageTracking from './hooks/usePageTracking';

/**
 * Demo application component.
 *
 * @returns JSX.Element - rendered demo.
 * @example
 * ```tsx
 * <App />
 * ```
 */
function App(): JSX.Element | null {
  usePageTracking();
  return null;
}

export default App
