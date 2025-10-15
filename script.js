'use strict';

const currentDayObj = new Date();
const currentMonth = currentDayObj.getMonth() + 1;
const currentDate = currentDayObj.getDate();
const currentYear = currentDayObj.getFullYear();

const currentDateMsg = `Today is ${currentMonth}/${currentDate}/${currentYear}`;
const dateHeading = document.querySelector('#currentDate');
dateHeading.textContent = currentDateMsg;

