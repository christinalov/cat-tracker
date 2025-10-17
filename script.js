"use strict";

const currentDayObj = new Date();
const currentMonth = currentDayObj.getMonth() + 1;
const currentDate = currentDayObj.getDate();
const currentYear = currentDayObj.getFullYear();

const currentDateMsg = `Today is ${currentMonth}/${currentDate}/${currentYear}`;
const dateHeading = document.querySelector("#currentDate");
dateHeading.textContent = currentDateMsg;

const litterBoxDateObj = document.querySelector("#litterbox-date");

const onLitterBoxDateChange = function () {
  const selectedDate = litterBoxDateObj.value;
  localStorage.setItem("litterBoxCleanDate", selectedDate);
};

litterBoxDateObj.addEventListener("change", onLitterBoxDateChange);
