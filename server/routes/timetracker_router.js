const TimelineController = require('../controller/timetracker_controller');

const express = require('express');
const TimelineRouter = express.Router();

TimelineRouter.post('/signup', TimelineController.signup)

TimelineRouter.post('/login', TimelineController.login)

TimelineRouter.post('/insertActivity', TimelineController.insertActivity)

TimelineRouter.post('/insertTimeline', TimelineController.insertTimeline)

TimelineRouter.get('/getActivity', TimelineController.getActivity);

module.exports = TimelineRouter;