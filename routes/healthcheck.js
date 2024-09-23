import express from 'express';

const router = express.Router();

router.get('/healthcheck', (req, res) => {
  const currentDate = new Date().toUTCString();
  const response = {
    date: currentDate,
    status: 'OK',
  };
  res.status(200).json(response);
});

export { router as healthcheckRouter };
