import express from 'express';
import validateRequest from '../../middleWare/validateRequest';
import { RecentEventController } from './recentEvent.controller';
import { RecentEventValidation } from './recentEvent.validation';

const router = express.Router();

router.post(
  '/create-recent-event',
  validateRequest(RecentEventValidation.createRecentEventValidationSchema),
  RecentEventController.createRecentEvent,
);

router.get('/', RecentEventController.getRecentEvents);

router.patch(
  '/:id',
  validateRequest(RecentEventValidation.updateRecentEventValidationSchema),
  RecentEventController.updateRecentEvent,
);

router.delete('/:id', RecentEventController.deleteRecentEvent);

export const RecentEventRoutes = router;
