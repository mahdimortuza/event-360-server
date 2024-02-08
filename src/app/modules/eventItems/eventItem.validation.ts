import { z } from 'zod';

const createEventItemValidationSchema = z.object({
  body: z.object({
    image: z.string(),
    title: z.string(),
  }),
});

const updateEventItemValidationSchema = z.object({
  body: z.object({
    image: z.string().optional(),
    title: z.string().optional(),
  }),
});

export const EventValidation = {
  createEventItemValidationSchema,
  updateEventItemValidationSchema,
};
