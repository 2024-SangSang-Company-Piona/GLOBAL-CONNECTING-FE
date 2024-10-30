import { useEffect } from 'react';

import ResumeForm from '../components/resume/ResumeForm';
import ReviewResult from '../components/review/ReviewResult';
import { dataStore } from '../store/dataStore';
import { useReviewMutation } from '../apis/mutations';

const ReviewPage = () => {
  const reviewedText = dataStore((state) => state.reviewedText);
  const resetStore = dataStore((state) => state.resetStore);
  const mutation = useReviewMutation();

  useEffect(() => {
    return () => {
      resetStore();
    };
  }, [resetStore]);

  return (
    <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* 자기소개서 입력 */}
        <section className="h-full rounded-lg bg-white shadow-sm">
          <ResumeForm mutation={mutation} />
        </section>

        {/* 첨삭 결과 */}
        <article className="h-[calc(100vh-100px)] lg:h-full">
          {reviewedText || mutation.isPending ? (
            <div className="h-full rounded-lg bg-white shadow-sm">
              <ReviewResult isPending={mutation.isPending} />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center rounded-lg bg-white/40 p-6">
              <p className="text-center text-gray-600">
                자기소개서를 입력하고 첨삭 버튼을 눌러주세요.
              </p>
            </div>
          )}
        </article>
      </div>
    </main>
  );
};

export default ReviewPage;
