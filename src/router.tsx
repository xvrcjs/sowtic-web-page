import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/layouts/Layout';
import Home from './pages/Home';
import RemoteAssistant from './pages/RemoteAssistant';
import SmartRutines from './pages/SmartRutines';
import ImageComputing from './pages/ImageComputing';
import InventaryControl from './pages/InventaryControl';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/remote-assistant',
          element: <RemoteAssistant />,
        },
        {
          path: '/smart-rutines',
          element: <SmartRutines />,
        },
        {
          path: '/image-computing',
          element: <ImageComputing />,
        },
        {
          path: '/inventary-control',
          element: <InventaryControl />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);
