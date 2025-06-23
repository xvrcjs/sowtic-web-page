import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga';
import { router } from './router.tsx';
import usePageTracking from './hooks/usePageTracking';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

/**
 * Demo application component.
 *
 * @returns JSX.Element - rendered demo.
 * @example
 * ```tsx
 * <App />
 * ```
 */
function App() {
  usePageTracking();
  const [count, setCount] = useState(0);

  const handleSubscribe = (): void => {
    setCount((c) => c + 1);
    ReactGA.event({ category: 'User', action: 'Clicked Subscribe' });
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'click_subscribe', {
        event_category: 'User',
        event_label: 'Subscribe Button',
      });
    }
  };

  return (
    <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={handleSubscribe}>
            count is {count}
          </button>
          <p className="text-3xl font-bold underline">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <RouterProvider router={router} />
      </>
  );
}

export default App
