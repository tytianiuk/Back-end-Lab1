import express from 'express';
import { DateTime } from 'luxon';

const router = express.Router();

router.get('/healthcheck', (req, res) => {
  const currentDate = DateTime.now().setZone('Europe/Kyiv').toISO();
  const response = {
    date: currentDate,
    status: 'OK',
  };
  res.status(200).json(response);
});

export { router as healthcheckRouter };
