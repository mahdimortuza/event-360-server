import express from 'express';
import validateRequest from '../../middleWare/validateRequest';
import { ServiceController } from './service.controller';
import { ServiceValidation } from './service.validation';

const router = express.Router();

router.post(
  '/create-service',
  validateRequest(ServiceValidation.createServiceValidationSchema),
  ServiceController.createService,
);

router.get('/', ServiceController.getServices);

router.patch(
  '/:id',
  validateRequest(ServiceValidation.updateServiceValidationSchema),
  ServiceController.updateService,
);

router.delete('/:id', ServiceController.deleteService);

export const ServiceRoutes = router;
