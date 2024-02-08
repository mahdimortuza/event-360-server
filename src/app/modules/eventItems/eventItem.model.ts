import { Schema, model } from 'mongoose';
import { TEvents } from './eventItem.interface';

const eventSchema = new Schema<TEvents>({
  image: {
    type: String,
    required: [true, 'Image link is required'],
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
});

export const eventModel = model<TEvents>('eventItems', eventSchema);
