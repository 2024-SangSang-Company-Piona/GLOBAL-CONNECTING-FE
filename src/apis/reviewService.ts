import axios from 'axios';

import { IReviewPayload, IReviewResponse } from '../types/review';
import { generateReviewText } from '../mocks/mockReview';

const apiUrl = '/chat/ask/1';

export const reviewService = {
  review: async (data: IReviewPayload): Promise<IReviewResponse> => {
    const response = await axios.post<IReviewResponse>(apiUrl, data);
    return response.data;
  },

  mockReview: async (data: IReviewPayload): Promise<IReviewResponse> => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    return {
      reviewedText: generateReviewText(data.resumeText),
    };
  },
};
