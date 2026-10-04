import { Router, type RequestHandler } from 'express';
import { getChannel, listChannels } from '../controllers/channel.controller.js';

export const channelRouter = Router();

const getChannelNotImplemented: RequestHandler = (_request, response) => {
  response.status(501).json({
    error: {
      code: 'CHANNEL_WATCH_NOT_IMPLEMENTED',
      message: 'Watching individual channels is not implemented yet'
    }
  });
};

channelRouter.get('/', listChannels);
channelRouter.get('/:id', getChannel);
