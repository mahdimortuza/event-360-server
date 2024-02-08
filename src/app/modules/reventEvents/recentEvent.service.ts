import { TRecentEvents } from './recentEvent.interface';
import { recentEventModel } from './recentEvent.model';

const createRecentEventIntoDB = async (payload: TRecentEvents) => {
  const result = await recentEventModel.create(payload);
  return result;
};

const getRecentEventFromDB = async () => {
  const result = await recentEventModel.find();
  return result;
};

const updateRecentEvent = async (
  id: string,
  payload: Partial<TRecentEvents>,
) => {
  const result = await recentEventModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteRecentEvent = async (id: string) => {
  const result = await recentEventModel.findByIdAndDelete(id);
  return result;
};

export const RecentEventServices = {
  createRecentEventIntoDB,
  getRecentEventFromDB,
  updateRecentEvent,
  deleteRecentEvent,
};
