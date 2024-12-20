import { useEffect } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Button } from '../ui/Button';
import { TextArea } from '../ui/TextArea';
import { dataStore } from '../../store/dataStore';
import { useReviewMutation } from '../../apis/mutations';
import { IReviewPayload } from '../../types/review';

type ResumeFormProps = {
  mutation: ReturnType<typeof useReviewMutation>;
};

const ResumeForm = ({ mutation }: ResumeFormProps) => {
  const { addChat } = dataStore();
  const reviewedText = dataStore((state) => state.reviewedText);
  const { control, handleSubmit, watch, reset } = useForm<IReviewPayload>({
    defaultValues: {
      resumeText: '',
    },
    mode: 'onChange', // 입력값이 변경될 때마다 유효성 검사
  });

  useEffect(() => {
    if (!reviewedText) {
      reset();
    }
  }, [reviewedText]);

  const resumeText = watch('resumeText'); // 입력값 감지

  const onSubmit = (data: IReviewPayload) => {
    mutation.mutate(data, {
      onError: (error) => {
        console.error(error);
        addChat('죄송합니다. 첨삭 중에 오류가 발생했어요. 다시 시도해 주세요.');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="resumeText"
        control={control}
        rules={{
          required: true,
          validate: (value) => value.trim().length > 0,
        }}
        render={({ field }) => (
          <>
            <h2 className="flex-shrink-0 rounded-t-lg border-b-2 px-4 py-2 text-base font-bold">
              자기소개서 입력
            </h2>
            <TextArea
              {...field}
              placeholder="원하는 자기소개서를 입력해주세요. 저희 AI가 글을 분석한 후 개선해드려요."
              rows={18}
              value={field.value || ''}
            />
          </>
        )}
      />

      <footer className="mt-2">
        <Button
          type="submit"
          className="w-full rounded-b-lg rounded-t-none"
          disabled={mutation.isPending || !resumeText?.trim()}
        >
          {mutation.isPending
            ? '첨삭 중이에요. 잠시만 기다려주세요!'
            : '자소서 첨삭'}
        </Button>
      </footer>
    </form>
  );
};

export default ResumeForm;
