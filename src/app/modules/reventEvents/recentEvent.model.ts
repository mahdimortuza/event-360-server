import { Schema, model } from 'mongoose';
import { TRecentEvents } from './recentEvent.interface';

const recentEventsSchema = new Schema<TRecentEvents>({
  image: {
    type: String,
    required: [true, 'Image link is required'],
  },
});

export const recentEventModel = model<TRecentEvents>(
  'recentEvents',
  recentEventsSchema,
);
