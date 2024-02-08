import { TService } from './service.interface';
import { serviceModel } from './service.model';

const createServiceIntoDB = async (payload: TService) => {
  const result = await serviceModel.create(payload);
  return result;
};

const getServiceFromDB = async () => {
  const result = await serviceModel.find();
  return result;
};

const updateService = async (id: string, payload: Partial<TService>) => {
  const result = await serviceModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteService = async (id: string) => {
  const result = await serviceModel.findByIdAndDelete(id);
  return result;
};

export const ServiceServices = {
  createServiceIntoDB,
  getServiceFromDB,
  updateService,
  deleteService,
};
