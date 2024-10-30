import { Outlet } from 'react-router-dom';

import Header from '../components/header/Header';

const Layout = () => {
  return (
    <main className="mt-14 min-h-screen bg-gray-100">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
