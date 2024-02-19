import { createBrowserRouter } from 'react-router-dom';

import LayoutPage from '@/pages/LayoutPage/LayoutPage';
import MainPage from '@/pages/MainPage/MainPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

import { PATH } from './path';

export const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <LayoutPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: PATH.ROOT,
        element: <MainPage />,
      },
    ],
  },
]);
