const express = require('express');
const app = express();
const TimelineRouter = require('./routes/timetracker_router')

app.use('/', TimelineRouter);

app.listen('5000', () => console.log(`Server is running on port 5000!`));