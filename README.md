# Work-Day-Scheduler

## Purpose

For this project, I created a page that allows the user to record tasks into the hours of a typical work day (9am to 5pm). The code uses the Moment.js API to pull the 
local time of the device and display that time. Each row has an hour block in which the user can write a task. Each hour displays a color based on if that hour has passed,
if it is that current hour, or if the hour has not passed yet. Gray for hour rows in the past, red for the current hour row, and green for future hour rows. 
This is done by pulling the Moment.js hour, parsing it into and integer and comparing it with the assigned parsed hour for each hour row.

[Link](https://JamesHuang0.github.io/Work-Day-Scheduler/) to the live application.

![Screenshot](https://github.com/mrxanthic/Work-Day-Scheduler/blob/main/assets/c5screenshot.PNG)
