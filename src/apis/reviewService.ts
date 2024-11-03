import axios from 'axios';

import { IReviewPayload, IReviewResponse } from '../types/review';
import { generateReviewText } from '../mocks/mockReview';

const baseURL = import.meta.env.VITE_REVIEW_API;

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const reviewService = {
  review: async (data: IReviewPayload): Promise<IReviewResponse> => {
    const response = await api.post<IReviewResponse>('/chat/ask/1', data);
    return response.data;
  },

  mockReview: async (data: IReviewPayload): Promise<IReviewResponse> => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    return {
      reviewedText: generateReviewText(data.resumeText),
    };
  },
};
