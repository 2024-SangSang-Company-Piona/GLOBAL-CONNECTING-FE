import { Link, useLocation } from 'react-router-dom';

import { PATH } from '../../constants/path';

const Header = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === PATH.LANDING;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b bg-white bg-opacity-60 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl justify-between p-4 sm:px-6 lg:px-8">
        <Link
          to={PATH.LANDING}
          className="text-lg font-bold transition-transform duration-300 hover:scale-105"
        >
          글로벌커넥팅
        </Link>
        {!isLandingPage && (
          <h1 className="text-lg font-bold">AI 자기소개서 첨삭</h1>
        )}
      </div>
    </header>
  );
};

export default Header;
