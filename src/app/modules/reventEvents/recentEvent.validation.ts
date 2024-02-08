import { z } from 'zod';

const createRecentEventValidationSchema = z.object({
  body: z.object({
    image: z.string(),
  }),
});

const updateRecentEventValidationSchema = z.object({
  body: z.object({
    image: z.string().optional(),
  }),
});

export const RecentEventValidation = {
  createRecentEventValidationSchema,
  updateRecentEventValidationSchema,
};
