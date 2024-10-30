import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Button } from '../components/ui/Button';
import { PATH } from '../constants/path';

const LandingPage = () => {
  return (
    <header className="flex min-h-screen flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-3xl font-bold lg:text-4xl"
      >
        자기소개서 첨삭 서비스
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mb-4 text-lg lg:mb-8 lg:text-xl"
      >
        AI가 당신의 자기소개서를 개선해드려요.
      </motion.p>

      <Link to={PATH.REVIEW}>
        <Button className="w-full">시작하기</Button>
      </Link>
    </header>
  );
};

export default LandingPage;
