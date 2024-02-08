import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { EventItemsServices } from './eventItem.service';

const createEvent = catchAsync(async (req, res) => {
  const result = await EventItemsServices.createEventItemIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event item is created successfully',
    data: result,
  });
});

const getEvents = catchAsync(async (req: Request, res: Response) => {
  const result = await EventItemsServices.getEventItemFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event item are fetched successfully',
    data: result,
  });
});

const updateEvent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await EventItemsServices.updateEventItem(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event item is updated successfully',
    data: result,
  });
});

const deleteEvent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EventItemsServices.deleteEventItem(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event item is deleted successfully',
    data: result,
  });
});

export const EventController = {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
};
