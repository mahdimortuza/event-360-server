import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RecentEventServices } from './recentEvent.service';

const createRecentEvent = catchAsync(async (req, res) => {
  const result = await RecentEventServices.createRecentEventIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event item is created successfully',
    data: result,
  });
});

const getRecentEvents = catchAsync(async (req: Request, res: Response) => {
  const result = await RecentEventServices.getRecentEventFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event item are fetched successfully',
    data: result,
  });
});

const updateRecentEvent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await RecentEventServices.updateRecentEvent(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event item is updated successfully',
    data: result,
  });
});

const deleteRecentEvent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await RecentEventServices.deleteRecentEvent(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event item is deleted successfully',
    data: result,
  });
});

export const RecentEventController = {
  createRecentEvent,
  getRecentEvents,
  updateRecentEvent,
  deleteRecentEvent,
};
