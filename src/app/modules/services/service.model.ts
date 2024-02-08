import { Schema, model } from 'mongoose';
import { TService } from './service.interface';

const serviceSchema = new Schema<TService>({
  image: {
    type: String,
    required: [true, 'Image link is required'],
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  feature1: {
    type: String,
    required: [true, 'Title is required'],
  },
  feature2: {
    type: String,
    required: [true, 'Title is required'],
  },
  feature3: {
    type: String,
    required: [true, 'Title is required'],
  },
  feature4: {
    type: String,
    required: [true, 'Title is required'],
  },
  feature5: {
    type: String,
    required: [true, 'Title is required'],
  },
});

export const serviceModel = model<TService>('service', serviceSchema);
