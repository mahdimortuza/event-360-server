import { z } from 'zod';

const createServiceValidationSchema = z.object({
  body: z.object({
    image: z.string(),
    title: z.string(),
    feature1: z.string(),
    feature2: z.string(),
    feature3: z.string(),
    feature4: z.string(),
    feature5: z.string(),
  }),
});

const updateServiceValidationSchema = z.object({
  body: z.object({
    image: z.string().optional(),
    title: z.string().optional(),
    feature1: z.string().optional(),
    feature2: z.string().optional(),
    feature3: z.string().optional(),
    feature4: z.string().optional(),
    feature5: z.string().optional(),
  }),
});

export const ServiceValidation = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
