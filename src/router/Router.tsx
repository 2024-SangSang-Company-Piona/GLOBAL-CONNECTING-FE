import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import ReviewPage from '../pages/ReviewPage';
import Layout from './Layout';
import { PATH } from '../constants/path';

const Router = () => {
  const { LANDING, REVIEW } = PATH;

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: LANDING,
          element: <LandingPage />,
        },
        {
          path: REVIEW,
          element: <ReviewPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
