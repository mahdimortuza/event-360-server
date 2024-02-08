import express from 'express';
import validateRequest from '../../middleWare/validateRequest';
import { EventController } from './eventItem.controller';
import { EventValidation } from './eventItem.validation';

const router = express.Router();

router.post(
  '/create-event-item',
  validateRequest(EventValidation.createEventItemValidationSchema),
  EventController.createEvent,
);

router.get('/', EventController.getEvents);

router.patch(
  '/:id',
  validateRequest(EventValidation.updateEventItemValidationSchema),
  EventController.updateEvent,
);

router.delete('/:id', EventController.deleteEvent);

export const EventItemRoutes = router;
