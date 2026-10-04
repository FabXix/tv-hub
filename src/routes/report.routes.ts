import { Router } from 'express';
import { createReport, listReports } from '../controllers/report.controller.js';
import { authenticate } from '../middleware/authenticate.middleware.js';
import { upload } from '../middleware/upload.js';

export const reportRouter = Router();

reportRouter.get('/', authenticate, listReports);
reportRouter.post(
  '/',
  authenticate,
  upload.single('evidence'),
  createReport
);
