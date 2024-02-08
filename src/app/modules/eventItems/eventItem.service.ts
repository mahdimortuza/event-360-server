import { TEvents } from './eventItem.interface';
import { eventModel } from './eventItem.model';

const createEventItemIntoDB = async (payload: TEvents) => {
  const result = await eventModel.create(payload);
  return result;
};

const getEventItemFromDB = async () => {
  const result = await eventModel.find();
  return result;
};

const updateEventItem = async (id: string, payload: Partial<TEvents>) => {
  const result = await eventModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteEventItem = async (id: string) => {
  const result = await eventModel.findByIdAndDelete(id);
  return result;
};

export const EventItemsServices = {
  createEventItemIntoDB,
  getEventItemFromDB,
  updateEventItem,
  deleteEventItem,
};
