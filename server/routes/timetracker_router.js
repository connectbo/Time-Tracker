const TimelineController = require('../controller/timetracker_controller');

const express = require('express');
const TimelineRouter = express.Router();

TimelineRouter.post('/signup', TimelineController.signup)

module.exports = TimelineRouter;